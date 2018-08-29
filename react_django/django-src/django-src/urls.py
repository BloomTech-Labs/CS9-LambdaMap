from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from django_app.api import register, login, logout, update, delete, create_listing, get_listings, get_client, \
    get_clients, get_hire_partners, add_favorite_listing, client_favorites, get_users

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/register/', register),
    path('api/login/', login),
    path('api/delete/', delete),
    path('api/update/', update),
    path('api/clients/', get_clients),
    path('api/hire-partners/', get_hire_partners),
    path('api/create-job-listings/', create_listing),
    path('api/job-listings/', get_listings),
    path('api/add-favorite-listing/', add_favorite_listing),
    path('api/client-favorites/', client_favorites),
    path('api/get_users/', get_users),
    re_path('api/clients/\d+/', get_client)
]
