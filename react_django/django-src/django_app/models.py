from django.db import models


class StudentProfile(models.Model):
    class StudentProfile(models.Model):
        username = models.CharField(max_length=50, default='', unique=True)
        student = models.BooleanField(default=True)
        email = models.EmailField(unique=True)
        pwd = models.CharField(max_length=50, default='')
        linkedin = models.CharField(max_length=50, default='')
        github = models.CharField(max_length=50, default='')
        first_name = models.CharField(max_length=50, default='')
        last_name = models.CharField(max_length=50, default='')

        def __repr__(self):
            return self.username

        def __str__(self):
            return self.username


class HirePartner(models.Model):
    company_name = models.CharField(max_length=50, default='', unique=True)
    email = models.EmailField(unique=True)
    pwd = models.CharField(max_length=50, default='')

    def __repr__(self):
        return self.username