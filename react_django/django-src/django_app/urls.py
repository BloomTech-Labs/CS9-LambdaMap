from django.urls import path, re_path
from .api import register, login, logout, update, delete, create_listing, get_listings, get_client, \
    get_clients, get_hire_partners, add_favorite_listing, client_favorites, get_users, get_hp

urlpatterns=[
    path('register/', register),
    path('login/', login),
    path('delete/', delete),
    path('update/', update),
    path('clients/', get_clients),
    path('logout/', logout),
    path('hire-partners/', get_hire_partners),
    path('create-job-listings/', create_listing),
    re_path('job-listings/(\d+\/)?', get_listings),
    path('add-favorite-listing/', add_favorite_listing),
    path('client-favorites/', client_favorites),
    path('users/', get_users),
    re_path('hp/\d+/', get_hp),
    re_path('client/\d+/', get_client)
]