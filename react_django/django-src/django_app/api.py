from django.http import JsonResponse
from .models import Users, Clients, Hire_Partners
from .security import encrypt_password, verify_password
from django.db import IntegrityError
from django.core import serializers
from django.forms.models import model_to_dict
import json
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def str_to_bool(str):
    return str[0] == 'T' or str[0] == 't'

def create_client(request):
    if request.META['REQUEST_METHOD'] == 'POST':
      try:
        request_body = json.loads(request.body.decode('ascii'))
        client = Clients(
            email=request_body['email'],
            password=encrypt_password(request_body['password'])
        )
        try:
          client.save()
        except IntegrityError as e:
          return JsonResponse({"error":e},status=400)
        return JsonResponse(request_body, status=201)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
    else:
        return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"},
                            status=400)
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
      return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"},
                            status=400)

def update_client(request):
    if request.META['REQUEST_METHOD'] == 'PUT':
      request_body = json.loads(request.body.decode('ascii'))
      try:
        client = Clients.objects.filter(email=request_body['email'])
        if(len(client) > 0):
          client = client[0]
          client.password = encrypt_password(request_body['password'])
          try:
            client.save()
          except IntegrityError as e:
            return JsonResponse({"Error":e},status=400)
          return JsonResponse({"Password changed": str(verify_password(request_body['password'], client.password))}, status=202)
        else:
          return JsonResponse({"Error": "incorrect email or password"}, status=400)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
    else:
      return JsonResponse({"Error": "incorrect request method. please make a PUT request to this end point"},
                              status=400)

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
      return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"},
                              status=400)
def create_hire_partner(request):
    if request.META['REQUEST_METHOD'] == 'POST':
      try:
        request_body = json.loads(request.body.decode('ascii'))
        hirePartner = Hire_Partners(
            email=request_body['email'],
            password=encrypt_password(request_body['password']),
            company_name = request_body['company_name']
        )
        try:
          hirePartner.save()
        except IntegrityError as e:
          return JsonResponse({"error":e},status=400)
        return JsonResponse(request_body, status=201)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
    else:
        return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"},
                            status=400)
def get_hire_partners(request):
    if request.META['REQUEST_METHOD'] == 'GET':
        try:
          hirePartners = [obj.to_dict() for obj in Hire_Partners.objects.all()]
          return JsonResponse({"hirePartners":hirePartners})
        except Hire_Partners.DoesNotExist as e:
          return JsonResponse({"Error":e})
    else:
      return JsonResponse({"Error": "incorrect request method. please make a GET request to this end point"},
                            status=400)

def update_hire_partner(request):
    if request.META['REQUEST_METHOD'] == 'PUT':
      request_body = json.loads(request.body.decode('ascii'))
      try:
        hirePartner = Hire_Partners.objects.filter(email=request_body['email'])
        if(len(client) > 0):
          hirePartner = hirePartner[0]
          hirePartner.password = encrypt_password(request_body['password'])
          try:
            hirePartner.save()
          except IntegrityError as e:
            return JsonResponse({"Error":e},status=400)
          return JsonResponse({"hirePartner":hirePartner})
        else:
          return JsonResponse({"Error": "Email not found"}, status=400)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
    else:
      return JsonResponse({"Error": "incorrect request method. please make a PUT request to this end point"},
                              status=400)

def delete_hire_partner(request):
    if request.META['REQUEST_METHOD'] == 'DELETE':
      try:
        request_body = json.loads(request.body.decode('ascii'))
        hirePartner = Hire_Partners.objects.filter(email=request_body['email'])
        if(len(client) > 0):
          hirePartner= hirePartner[0].delete()
          return JsonResponse({"deleted": request_body}, status=204)
        else:
          return JsonResponse({"Delete failed": "email doesn't exit"}, status=400)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
    else:
      return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"},
                              status=400)


def log_in_hire_partner(request):
    if request.META['REQUEST_METHOD'] == 'POST':
      try:
        request_body = json.loads(request.body.decode('ascii'))
        hirePartner = Hire_Partners.objects.filter(email=request_body['email'])
        if(len(hirePartner) > 0):
          hirePartner= hirePartner[0]
          if(str(verify_password(request_body['password'],hirePartner.password))):
            return JsonResponse({"hirePartner":model_to_dict(hirePartner)})
        else:
          return JsonResponse({"Login failed": "incorrect email or password"}, status=400)
      except KeyError as e:
        return JsonResponse({"Invalid request": e}, status=400)
    else:
      return JsonResponse({"Error": "incorrect request method. please make a POST request to this end point"},
                            status=400)

def populate_states(request):
    f = open(os.path.join(BASE_DIR, '/django_app/states.txt', 'rt')) # f == file
    for x in f:
        print(x.read())
    return JsonResponse({"helllo": "world"})
