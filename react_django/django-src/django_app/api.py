from django.http import JsonResponse
from .models import Users, Clients, Hire_Partners, Job_Listing
from .security import encrypt_password, verify_password
from django.db import IntegrityError
from django.core import serializers
from django.forms.models import model_to_dict
import json

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
            about=request_body['about'])
        try:
          client.save()
        except IntegrityError as e:
          return JsonResponse({"error":e},status=400)
        return JsonResponse(request_body, status=201)
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
      return JsonResponse({"Error": "incorrect request method. please make a GET request to this end point"},
                            status=400)


def log_in_client(request):
    if request.META['REQUEST_METHOD'] == 'POST':
      try:
        request_body = json.loads(request.body.decode('ascii'))
        client = Clients.objects.filter(email=request_body['email'])
        if(len(client) > 0):
          client = client[0]
          if(str(verify_password(request_body['password'],client.password))):
            return JsonResponse({"Client":model_to_dict(client)})
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
      return JsonResponse({"Error": "incorrect request method. please make a DELETE request to this end point"}, status=400)


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
            about=request_body['about'])
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


# endpoints for Job Listings
def create_listing(request):
    if request.META['REQUEST_METHOD'] == 'POST':
      try:
        request_body = json.loads(request.body.decode('ascii'))
        jobListing = Job_Listing(
          hp_id =request_body['hpId'],
          job_title =request_body['jobTitle'],
          job_desc =request_body['jobDesc'],
          job_link =request_body['jobLink'],
          posted_time =request_body['postedOn']
        )
        try:
          jobListing.save()
        except IntegrityError as e:
          return JsonResponse({"error":e},status=400)
        return JsonResponse(request_body, status=201)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
    else:
        return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"}, status=400)


def get_listings(request):
    if request.META['REQUEST_METHOD'] == 'GET':
        try:
          hirePartners = [obj.to_dict() for obj in Hire_Partners.objects.all()]
          for HPs in hirePartners:
            jobListings = json.loads(serializers.serialize('json', Job_Listing.objects.filter(hp_id=HPs['id'])))
            for x in range(len(jobListings)):
              jobListings[x] = jobListings[x]['fields']
            HPs['jobListings']=jobListings
          return JsonResponse({"HPjobListings":hirePartners})
        except Job_Listing.DoesNotExist as e:
          return JsonResponse({"Error":e})
    else:
      return JsonResponse({"Error": "incorrect request method. please make a GET request to this end point"}, status=400)