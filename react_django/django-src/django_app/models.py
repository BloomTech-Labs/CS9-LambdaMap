from django.db import models


class UserProfile(models.Model):
    username = models.CharField(max_length=50, default='', unique=True)
    student = models.BooleanField(default=True)
    email = models.EmailField(unique=True)
    pwd = models.CharField(max_length=50, default='')

    def __repr__(self):
        return self.username

    def __str__(self):
        return self.username
