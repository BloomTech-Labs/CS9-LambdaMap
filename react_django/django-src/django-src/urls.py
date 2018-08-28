"""example URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from django_app.api import register, login, logout, create_listing, get_listings, get_client, delete_client, update_client, \
    get_clients, delete_hire_partner, update_hire_partner, get_hire_partners, add_favorite_listing, client_favorites

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/register/', register),
    path('api/login/', login),
    path('api/delete-client/', delete_client),
    path('api/update-client/', update_client),
    path('api/clients/', get_clients),
    path('api/delete-hire-partner/', delete_hire_partner),
    path('api/update-hire-partner/', update_hire_partner),
    path('api/hire-partners/', get_hire_partners),
    path('api/create-job-listings/', create_listing),
    path('api/job-listings/', get_listings),
    path('api/add-favorite-listing/', add_favorite_listing),
    path('api/client-favorites/', client_favorites),
    re_path('api/clients/\d+/', get_client)
]
