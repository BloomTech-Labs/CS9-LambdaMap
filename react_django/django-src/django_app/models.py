from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models


class Users(models.Model):
    id = models.AutoField(primary_key=True) 
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=20, default='')
    city = models.CharField(max_length=50, blank=True, default='')
    state = models.CharField(max_length=50, blank=True, default='')
    personal_website = models.URLField(blank=True, default='')
    phone = models.CharField(max_length=50, blank=True, default='')
    about = models.CharField(max_length=400, blank=True, default='')


class Clients(Users):
    first_name = models.CharField(max_length=20, default='')
    last_name = models.CharField(max_length=20, default='')
    remote = models.BooleanField(default=False, blank=True)
    relocate = models.BooleanField(default=False, blank=True)
    linkedin = models.URLField(default='', blank=True)
    github = models.URLField(default='', blank=True)
    twitter = models.URLField(default='', blank=True)
    codepen = models.URLField(default='', blank=True)
    portfolio_picture = models.URLField(default='', blank=True)
    account_type = models.BooleanField(default=False)

    def to_dict(self):
      return {"ID":self.id,"email":self.email,"password":self.password,"city":self.city,"state":self.state,"personal_website":self.personal_website,"first_name":self.first_name,"last_name":self.last_name,"remote":self.remote,"relocate":self.relocate,"linkedin":self.linkedin,"github":self.github,"twitter":self.twitter,"codepen":self.codepen,"portfolio_picture":self.portfolio_picture,"phone":self.phone,"about":self.about,"account_type":self.account_type}


class Hire_Partners(Users):
    company_name = models.CharField(max_length=50, blank=True, default='')
    account_type = models.BooleanField(default=True)

    def to_dict(self):
      return {"ID":self.id,"email":self.email,"password":self.password,"city":self.city,"state":self.state,"personal_website":self.personal_website,"company_name":self.company_name,"phone":self.phone,"about":self.about,"account_type":self.account_type}


# Added job listing model
class Job_Listing(models.Model):
    hp_id = models.ForeignKey(Hire_Partners, on_delete=models.DO_NOTHING, default='')
    job_title = models.CharField(max_length=30, default='')
    job_desc = models.TextField(default='')
    job_link = models.URLField(blank=True, default='')
    remote_job = models.BooleanField(default=False)
    posted_time = models.DateTimeField(auto_now_add=True)
    clients = models.ManyToManyField(Clients)


class Session(models.Model):
    key = models.CharField(max_length=100, default='')
    content_type = models.ForeignKey(ContentType, on_delete=models.DO_NOTHING)
    object_id = models.PositiveIntegerField(default='')
    content_object = GenericForeignKey('content_type', 'object_id')

