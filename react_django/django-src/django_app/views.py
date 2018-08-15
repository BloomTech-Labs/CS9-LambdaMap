from django.shortcuts import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, get_user_model
from .forms import RegisterForm

User = get_user_model()
def register_page(request):
    form = RegisterForm(request.POST or None)
    print(form.is_valid())
    if form.is_valid():
        username = form.cleaned_data.get("username")
        password = form.cleaned_data.get("password")
        email = form.cleaned_data.get("email")
        print(form.cleaned_data)
        # new_user = User.objects.create_user(username, email, password)
        # print(new_user)
        return render(request, 'index.html')