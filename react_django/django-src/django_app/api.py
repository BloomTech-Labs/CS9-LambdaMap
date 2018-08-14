from django.http import HttpResponse


def create_user(request):
    request = (HttpResponse(request))
    print(request.body)