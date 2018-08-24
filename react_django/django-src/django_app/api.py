from django.http import JsonResponse
from .models import Users, Clients, Hire_Partners, Job_Listing, Session
from django.contrib.contenttypes.models import ContentType
from .security import encrypt_password, verify_password
from .authentication import create_token, verify_token
from django.db import IntegrityError
from django.core import serializers
import json, re

def str_to_bool(str):
    return str[0] == 'T' or str[0] == 't'

def create_client(request):
    if request.META['REQUEST_METHOD'] == 'POST':
      try:
        request_body = json.loads(request.body.decode('ascii'))
<<<<<<< HEAD
        client = Clients(
            email=request_body['email'],
            password=encrypt_password(request_body['password']),
            city=request_body['city'],
            state=request_body['state'],
            personal_website=request_body['personal_website'],
            first_name=request_body['first_name'],
            last_name=request_body['last_name'],
            remote=request_body['remote'],
            relocate=request_body['relocate'],
            linkedin=request_body['linkedin'],
            github=request_body['github'],
            twitter=request_body['twitter'],
            codepen=request_body['codepen'],
            portfolio_picture=request_body['portfolio_picture'],
            phone=request_body['phone'],
            about=request_body['about']
        )
=======
        client = Clients()
        for x in request_body:
            if x == 'password':
                client.__setattr__(x, encrypt_password(request_body[x]))
            else:
                client.__setattr__(x, request_body[x])
>>>>>>> 08eef87f6a140f987d34127af29dfdb369eafda9
        try:
            client.save()
        except IntegrityError as e:
          return JsonResponse({"error": e}, status=400)
        client = json.loads(serializers.serialize('json', Clients.objects.filter(id=client.id)))[0]
        return JsonResponse(client, status=201)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
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


def log_in_client(request):
    if request.META['REQUEST_METHOD'] == 'POST':
      try:
        request_body = json.loads(request.body.decode('ascii'))
        client = Clients.objects.filter(email=request_body['email'])
        if len(client) > 0:
            client = client[0]
            if verify_password(request_body['password'], client.password):
                token = create_token()
                session = Session(
                    content_type=ContentType.objects.get_for_model(Clients),
                    object_id=client.id,
                    key=token
                )
                session.save()
                del client._state
                del client.password
                response = JsonResponse(client.__dict__, status=200)
                response.__setitem__(header='jwt', value=token)
                return response
        else:
          return JsonResponse({"Login failed": "incorrect email or password"}, status=400)
      except:
        return JsonResponse({"Error": "Invalid Data Field"}, status=400)
    else:
      return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"}, status=400)

def log_out_client(request):
    if request.META['REQUEST_METHOD'] == 'GET':
        try:
            Session.objects.get(key=request.META['HTTP_JWT'].encode('ascii')).delete()
            return JsonResponse({"User":"logged out"}, status=200)
        except:
            return JsonResponse({"Error": "unable to delete record."}, status=400)


def update_client(request):
    if request.META['REQUEST_METHOD'] == 'PUT':
        request_body = json.loads(request.body.decode('ascii'))
        if verify_token(request.META['HTTP_JWT']):
            session_obj = Session.objects.get(key=request.META['HTTP_JWT'].encode('ascii'))
            client = Clients.objects.get(id=session_obj.object_id)
            for x in request_body:
                if x == 'password':
                    client.__setattr__(x, encrypt_password(request_body[x]))
                else:
                    client.__setattr__(x, request_body[x])
            client.save()
            del client._state
            del client.password
            return JsonResponse(client.__dict__, status=200)
        else:
            Session.objects.get(key=request.META['HTTP_JWT'].encode('ascii')).delete()
            return JsonResponse({"Error": "Expired Token"})
    else:
        return JsonResponse({"Error": "incorrect request method. please make a PUT request to this end point"}, status=400)


def delete_client(request):
    if request.META['REQUEST_METHOD'] == 'DELETE':
      try:
          token = request.META['HTTP_JWT']
          if verify_token(token):
            session_obj = Session.objects.get(key=token.encode('ascii'))
            client = Clients.objects.get(id=session_obj.object_id)
            if client:
              session_obj.delete()
              client.delete()
              del client._state
              del client.password
              return JsonResponse({"deleted": client.__dict__}, status=204)
            else:
              return JsonResponse({"Delete failed": "email doesn't exit"}, status=400)
          else:
              return JsonResponse({"Error": "Expired JWT Token"}, status=400)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
    else:
      return JsonResponse({"Error": "incorrect request method. please make a DELETE request to this end point"}, status=400)


def create_hire_partner(request):
    if request.META['REQUEST_METHOD'] == 'POST':
      try:
        request_body = json.loads(request.body.decode('ascii'))
        hire_partner = Hire_Partners()
        for x in request_body:
            if x == 'password':
                hire_partner.__setattr__(x, encrypt_password(request_body[x]))
            else:
                hire_partner.__setattr__(x, request_body[x])
        try:
          hire_partner.save()
        except IntegrityError as e:
          return JsonResponse({"error":e},status=400)
        return JsonResponse(request_body, status=201)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
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


def update_hire_partner(request):
    if request.META['REQUEST_METHOD'] == 'PUT':
      request_body = json.loads(request.body.decode('ascii'))
      token = request.META['HTTP_JWT']
      try:
        if verify_token(token):
            hire_partner = Hire_Partners.objects.get(id=Session.objects.get(key=token.encode('ascii')).object_id)
            if hire_partner:
                for x in request_body:
                    if x == 'password':
                        hire_partner.__setattr__(x, encrypt_password(request_body[x]))
                    else:
                        hire_partner.__setattr__(x, request_body[x])
                hire_partner.save()
                del hire_partner._state
                del hire_partner.password
                return JsonResponse({"Updated HirePartner": hire_partner.__dict__})
            else:
              return JsonResponse({"Error": "Email not found"}, status=400)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
    else:
      return JsonResponse({"Error": "incorrect request method. please make a PUT request to this end point"}, status=400)


def delete_hire_partner(request):
    if request.META['REQUEST_METHOD'] == 'DELETE':
      try:
        token = request.META['HTTP_JWT']
        if verify_token(token):
            session_obj = Session.objects.get(key=token.encode('ascii'))
            hire_partner = Hire_Partners.objects.get(id=session_obj.object_id)
            if hire_partner:
                session_obj.delete()
                hire_partner.delete()
                del hire_partner._state
                return JsonResponse({"deleted": hire_partner.__dict__}, status=204)
            else:
              return JsonResponse({"Delete failed": "email doesn't exit"}, status=400)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
    else:
      return JsonResponse({"Error": "incorrect request method. please make a DELETE request to this end point"}, status=400)


def log_in_hire_partner(request):
    if request.META['REQUEST_METHOD'] == 'POST':
      try:
        request_body = json.loads(request.body.decode('ascii'))
        hire_partner = Hire_Partners.objects.get(email=request_body['email'])
        if hire_partner:
            if verify_password(request_body['password'], hire_partner.password):
                token = create_token()
                session = Session(
                    content_type=ContentType.objects.get_for_model(Hire_Partners),
                    object_id=hire_partner.id,
                    key=token
                )
                session.save()
                del hire_partner._state
                del hire_partner.password
                response = JsonResponse(hire_partner.__dict__, status=200)
                response.__setitem__(header='jwt', value=token)
                return response
            else:
                return JsonResponse({"Error": "Wrong Password"})
        else:
          return JsonResponse({"Error": "incorrect email"}, status=400)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
    else:
      return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"}, status=400)


# create Job Listings
def create_listing(request):
    if request.META['REQUEST_METHOD'] == 'POST':
      try:
        request_body = json.loads(request.body.decode('ascii'))
        job_listing = Job_Listing(
          hp_id =request_body['hpId'],
          job_title =request_body['job_title'],
          job_desc =request_body['job_desc'],
          job_link =request_body['job_link'],
          posted_time =request_body['posted_on']
        )
        try:
          job_listing.save()
        except IntegrityError as e:
          return JsonResponse({"error":e},status=400)
        return JsonResponse(request_body, status=201)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
    else:
        return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"}, status=400)


# get Job Listings that belong to a hiring partner, gets all hiring partner info with job listings
def get_listings(request):
    if request.META['REQUEST_METHOD'] == 'GET':
        try:
          hire_partners = [obj.to_dict() for obj in Hire_Partners.objects.all()]
          for HPs in hire_partners:
            job_listings = json.loads(serializers.serialize('json', Job_Listing.objects.filter(hp_id=HPs['ID'])))
            for x in range(len(job_listings)):
                job_listings[x] = job_listings[x]['fields']
            HPs['jobListings']=job_listings
            del HPs['password']
          return JsonResponse({"HPjobListings": hire_partners})
        except Job_Listing.DoesNotExist as e:
          return JsonResponse({"Error":e})
    else:
      return JsonResponse({"Error": "incorrect request method. please make a GET request to this end point"}, status=400)


# Get an individual Client
def get_client(request):
    if request.META['REQUEST_METHOD'] == 'GET':
      try:
        regex = re.compile('/api/clients/(\d)+/', re.MULTILINE)
        client = Clients.objects.get(id=regex.search(request.META['PATH_INFO']).group(1))
        return JsonResponse({"Client": client.to_dict()})
      except Clients.DoesNotExist as e:
          return JsonResponse({"Error":e})
    else:
      return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"}, status=400)