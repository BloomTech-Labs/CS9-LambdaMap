from django.http import JsonResponse
from .models import Users, Clients, Hire_Partners, Job_Listing
from .security import encrypt_password, verify_password
from .authentication import create_token, verify_token
from django.db import IntegrityError
from django.core import serializers
from django.forms.models import model_to_dict
import json, re

def str_to_bool(str):
    return str[0] == 'T' or str[0] == 't'

def create_client(request):
    if request.META['REQUEST_METHOD'] == 'POST':
      try:
        request_body = json.loads(request.body.decode('ascii'))
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
                del client._state
                del client.password
                response = JsonResponse(client.__dict__, status=200)
                response.__setitem__(header='jwt', value=create_token())
                return response
        else:
          return JsonResponse({"Login failed": "incorrect email or password"}, status=400)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
    else:
      return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"}, status=400)


def update_client(request):
    if request.META['REQUEST_METHOD'] == 'PUT':
      request_body = json.loads(request.body.decode('ascii'))
      try:
        client = Clients.objects.filter(email=request_body['email'])
        if(len(client) > 0):
          client = client[0]
          try:
            for key in request_body:
              setattr(client,key,request_body[key])
            client.save()
            return JsonResponse({"Updated Client":model_to_dict(client)})
          except IntegrityError as e:
              return JsonResponse({"Error":e},status=400)
        else:
          return JsonResponse({"Error": "incorrect email"}, status=400)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
    else:
      return JsonResponse({"Error": "incorrect request method. please make a PUT request to this end point"}, status=400)

def delete_client(request):
    if request.META['REQUEST_METHOD'] == 'DELETE':
      try:
        request_body = json.loads(request.body.decode('ascii'))
        client = Clients.objects.filter(email=request_body['email'])
        if(len(client) > 0):
          client= client[0].delete()
          return JsonResponse({"deleted": request_body}, status=204)
        else:
          return JsonResponse({"Delete failed": "email doesn't exit"}, status=400)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
    else:
      return JsonResponse({"Error": "incorrect request method. please make a DELETE request to this end point"},
                              status=400)

def create_hire_partner(request):
    if request.META['REQUEST_METHOD'] == 'POST':
      try:
        request_body = json.loads(request.body.decode('ascii'))
        hirePartner = Hire_Partners(
            email=request_body['email'],
            password=encrypt_password(request_body['password']),
            city=request_body['city'],
            state=request_body['state'],
            personal_website=request_body['personal_website'],
            phone=request_body['phone'],
            company_name = request_body['company_name'],
            about=request_body['about']
        )
        try:
          hirePartner.save()
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
      try:
        hirePartner = Hire_Partners.objects.filter(email=request_body['email'])
        if(len(hirePartner) > 0):
          hirePartner = hirePartner[0]
          try:
            for key in request_body:
              setattr(hirePartner,key,request_body[key])
            hirePartner.save()
            return JsonResponse({"Updated HirePartner":model_to_dict(hirePartner)})
          except IntegrityError as e:
            return JsonResponse({"Error":e},status=400)
          return JsonResponse({"hirePartner":hirePartner})
        else:
          return JsonResponse({"Error": "Email not found"}, status=400)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
    else:
      return JsonResponse({"Error": "incorrect request method. please make a PUT request to this end point"}, status=400)


def delete_hire_partner(request):
    if request.META['REQUEST_METHOD'] == 'DELETE':
      try:
        request_body = json.loads(request.body.decode('ascii'))
        hirePartner = Hire_Partners.objects.filter(email=request_body['email'])
        if(len(hirePartner) > 0):
          hirePartner= hirePartner[0].delete()
          return JsonResponse({"deleted": request_body}, status=204)
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
        hirePartner = Hire_Partners.objects.filter(email=request_body['email'])
        if(len(hirePartner) > 0):
          hirePartner= hirePartner[0]
          return JsonResponse({"hirePartner":model_to_dict(hirePartner)})
        else:
          return JsonResponse({"Login failed": "incorrect email or password"}, status=400)
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
                del job_listings[x].password
            HPs['jobListings']=job_listings
          return JsonResponse({"HPjobListings":hire_partners})
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