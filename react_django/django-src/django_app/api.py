from django.http import JsonResponse
from .models import Users, Clients, Hire_Partners, Job_Listing, Session
from django.contrib.contenttypes.models import ContentType
from .security import encrypt_password, verify_password
from .authentication import create_token, verify_token
from django.db import IntegrityError
from django.core import serializers
import random
import json
import re


def str_to_bool(str):
    return str[0] == 'T' or str[0] == 't'


def register(request):
    if request.META['REQUEST_METHOD'] == 'POST':
        request_body = json.loads(request.body.decode('ascii'))
        if str_to_bool(request_body["account_type"]):
            user = Hire_Partners()
        else:
            user = Clients()
        for x in request_body:
            if x == 'account_type':
                user.__setattr__(x, str_to_bool(request_body[x]))
            elif x == 'password':
                user.__setattr__(x, encrypt_password(request_body[x]))
            else:
                user.__setattr__(x, request_body[x])
        if user.city and user.state:
            response = urlopen('https://maps.googleapis.com/maps/api/geocode/json?address='+user.city+','+user.state+'&key=AIzaSyAgToUna43JuFhMerOH1DO1kzgCOR7VWm4')
            string = response.read().decode('utf-8')
            response = json.loads(string)
            numberlat = random.uniform(-0.05, 0.05)
            numberlng = random.uniform(-0.05, 0.05)
            lat = response['results'][0]['geometry']['location']['lat']
            lng = response['results'][0]['geometry']['location']['lng']
            lat = str((float(lat) + numberlat))
            lng = str((float(lng) + numberlng)) 
            user.lat = lat
            user.lng = lng
        try:
            user.save()
        except user.FieldError as err:
            print(err)
            return JsonResponse({"Error": json.loads(err)}, status=400)
        return JsonResponse({}, status=201)


def login(request):
    request_body = json.loads(request.body.decode('ascii'))

    def send_user(user):
        if verify_password(request_body['password'], user.password):
            token = create_token()
            session = Session(
                content_type=ContentType.objects.get_for_model(user.__class__),
                object_id=user.id,
                key=token
            )
            session.save()
            del user._state
            del user.password
            response = JsonResponse(user.__dict__, status=200)
            response.__setitem__(header='jwt', value=token)
            return response

    if request.META['REQUEST_METHOD'] == 'POST':
        try:
            hire_partner = Hire_Partners.objects.get(email=request_body['email'])
            return send_user(hire_partner)
        except Hire_Partners.DoesNotExist:
            try:
                client = Clients.objects.get(email=request_body['email'])
                return send_user(client)
            except Clients.DoesNotExist:
                return JsonResponse({"Login failed": "incorrect email or password"}, status=400)
    else:
        return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"}, status=400)


def logout(request):
    if request.META['REQUEST_METHOD'] == 'GET':
        try:
            Session.objects.get(key=request.META['HTTP_JWT'].encode('ascii')).delete()
            return JsonResponse({"User": "logged out"}, status=200)
        except:
            return JsonResponse({"Error": "unable to delete record."}, status=400)


def update(request):
    request_body = json.loads(request.body.decode('ascii'))
    if request.META['REQUEST_METHOD'] == 'PUT':
        if verify_token(request.META['HTTP_JWT']):
            session_obj = Session.objects.get(key=request.META['HTTP_JWT'].encode('ascii'))
            try:
                user = Clients.objects.get(id=session_obj.object_id)
            except Clients.DoesNotExist:
                user = Hire_Partners.objects.get(id=session_obj.object_id)
            for x in request_body:
                if x == 'password':
                    user.__setattr__(x, encrypt_password(request_body[x]))
                else:
                    user.__setattr__(x, request_body[x])
            user.save()
            del user._state
            del user.password
            return JsonResponse(user.__dict__, status=200)
        else:
            Session.objects.get(key=request.META['HTTP_JWT'].encode('ascii')).delete()
            return JsonResponse({"Error": "Expired Token"})
    else:
        return JsonResponse({"Error": "incorrect request method. please make a PUT request to this end point"}, status=400)


def delete(request):
    if request.META['REQUEST_METHOD'] == 'DELETE':
        token = request.META['HTTP_JWT']
        if verify_token(token):
            session_obj = Session.objects.get(key=token.encode('ascii'))
            try:
                user = Clients.objects.get(id=session_obj.object_id)
            except Clients.DoesNotExist:
                user = Hire_Partners.objects.get(id=session_obj.object_id)
            if user:
                session_obj.delete()
                user.delete()
                del user._state
                del user.password
                return JsonResponse({"deleted": user.__dict__}, status=204)
            else:
                return JsonResponse({"Delete failed": "email doesn't exit"}, status=400)
        else:
            return JsonResponse({"Error": "Expired JWT Token"}, status=400)
    else:
        return JsonResponse({"Error": "incorrect request method. please make a DELETE request to this end point"}, status=400)


# create Job Listings
def create_listing(request):
    if request.META['REQUEST_METHOD'] == 'POST':
        try:
            request_body = json.loads(request.body.decode('ascii'))
            hp = Hire_Partners.objects.get(pk=request_body['hp_id'])
            job_listing = Job_Listing()
            for x in request_body:
                if x == "hp_id":
                    job_listing.__setattr__(x, hp)
                else:
                    job_listing.__setattr__(x, request_body[x])
            try:
                job_listing.save()
            except IntegrityError as e:
                return JsonResponse({"error":e},status=400)
            return JsonResponse(request_body, status=201)
        except KeyError as e:
            return JsonResponse({"Invalid request": e}, status=400)
    else:
        return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"}, status=400)


def client_favorites(request):
    if request.META['REQUEST_METHOD'] == 'POST':
        try:
            request_body = json.loads(request.body.decode('ascii'))
            client = Clients.objects.get(pk=request_body['client_id'])
            favorites = []
            response = {}
            for e in client.job_listing_set.all():
                favorites.append(e.id)
            response['favorites'] = favorites
            return JsonResponse(response,status=200)
        except Clients.DoesNotExist as e:
            return JsonResponse({"Error":e})
    else:
        return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"}, status=400)


def get_hire_partners(request):
    if request.META['REQUEST_METHOD'] == 'GET':
        try:
            hirePartners = [obj.to_dict() for obj in Hire_Partners.objects.all()]
            return JsonResponse({"hirePartners":hirePartners})
        except Hire_Partners.DoesNotExist as e:
            return JsonResponse({"Error":e})
    else:
        return JsonResponse({"Error": "incorrect request method. please make a GET request to this end point"}, status=400)


# get Job Listings that belong to a hiring partner, gets all hiring partner info with job listings
def get_listings(request):
    if request.META['REQUEST_METHOD'] == 'GET':
        try:
            hire_partners = [obj.to_dict() for obj in Hire_Partners.objects.all()]
            for HPs in hire_partners:
                job_listings = json.loads(serializers.serialize('json', Job_Listing.objects.filter(hp_id=HPs['ID'])))
                for x in range(len(job_listings)):
                    job_listings[x] = {**job_listings[x]['fields'], 'pk': job_listings[x]['pk']}
                HPs['jobListings']=job_listings
            hire_partners = list(filter(lambda HP: len(HP['jobListings']) > 0, hire_partners))
                # del HPs['password']
            return JsonResponse({"HPjobListings": hire_partners})
        except Job_Listing.DoesNotExist as e:
            return JsonResponse({"Error":e})
    else:
        return JsonResponse({"Error": "incorrect request method. please make a GET request to this end point"}, status=400)

# Get an individual Client
def get_client(request):
    if request.META['REQUEST_METHOD'] == 'GET':
        try:
            regex = re.compile('/api/client/(\d+)/', re.MULTILINE)
            client = Clients.objects.get(id=regex.search(request.META['PATH_INFO']).group(1))
            return JsonResponse({"Client": client.to_dict()})
        except Clients.DoesNotExist as e:
            return JsonResponse({"Error":e})
    else:
        return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"}, status=400)


def get_hp(request):
    if request.META['REQUEST_METHOD'] == 'GET':
        try:
            regex = re.compile('/api/hp/(\d+)/', re.MULTILINE)
            hp = Hire_Partners.objects.get(id=regex.search(request.META['PATH_INFO']).group(1)).to_dict()
            hp['job_listings'] = json.loads(serializers.serialize('json', Job_Listing.objects.filter(hp_id=hp['ID'])))
            return JsonResponse({"Hire_Partner": hp})
        except Clients.DoesNotExist as e:
            return JsonResponse({"Error":e})
    else:
        return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"}, status=400)


def get_clients(request):
    if request.META['REQUEST_METHOD'] == 'GET':
        try:
          clients = [obj.to_dict() for obj in Clients.objects.all()]
          return JsonResponse({"Clients":clients})
        except Clients.DoesNotExist as e:
          return JsonResponse({"Error":e})
    else:
      return JsonResponse({"Error": "incorrect request method. please make a GET request to this end point"}, status=400)


def get_users(request):
    regex = re.compile(
        'table=(?P<table>(client\+hp|client|hp))'
        '(&profession=(?P<profession>(web\+developer|web\+designer|ios\+developer)))?',
        re.MULTILINE+re.IGNORECASE
    )
    query = {}
    if request.META['REQUEST_METHOD'] == 'GET':
        if len(request.META['QUERY_STRING']) > 0:
            parsed_query = regex.search(request.META['QUERY_STRING']).groupdict()
            if len(parsed_query['table'].split('+')) > 1:
                query['clients'] = list(map(lambda x: x.to_dict(), list(Clients.objects.all())))
                query['hire-partners'] = list(map(lambda x: x.to_dict(), list(Hire_Partners.objects.all())))
            else:
                if parsed_query['table'] == 'client':
                    query['clients'] = list(map(lambda x: x.to_dict(), list(Clients.objects.all())))
                else:
                    query['hire-partners'] = list(map(lambda x: x.to_dict(), list(Hire_Partners.objects.all())))
            if parsed_query['profession']:
                if parsed_query['profession'].replace('+', ' ') == 'web developer':
                    query['clients'] = list(filter(lambda x: x['profession'] == 'web developer', query['clients']))
                elif parsed_query['profession'].replace('+', ' ') == 'web designer':
                    query['clients'] = list(filter(lambda x: x['profession'] == 'web designer', query['clients']))
                else:
                    query['clients'] = list(filter(lambda x: x['profession'] == 'ios developer', query['clients']))
        else:
            query['clients'] = list(map(lambda x: x.to_dict(), list(Clients.objects.all())))
            query['hire-partners'] = list(map(lambda x: x.to_dict(), list(Hire_Partners.objects.all())))
        return JsonResponse(query, status=200)
