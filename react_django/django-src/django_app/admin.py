from django.contrib import admin
from .models import User, Student, Employer

admin.site.register(User)
admin.site.register(Employer)
admin.site.register(Student)

