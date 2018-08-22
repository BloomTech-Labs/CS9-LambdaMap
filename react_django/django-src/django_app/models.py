from django.db import models

class Users(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=20, default='')
    city = models.CharField(max_length=50, blank=True, null=True)
    state = models.CharField(max_length=50, blank=True, null=True)
    personal_website = models.URLField(blank=True, null=True)
    phone = models.CharField(max_length=50, blank=True, null=True)
    about = models.CharField(max_length=400, blank=True, null=True)


class Clients(Users):
    first_name = models.CharField(max_length=20, default='')
    last_name = models.CharField(max_length=20, default='')
    remote = models.BooleanField(default=False)
    relocate = models.BooleanField(default=False)
    linkedin = models.URLField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    codepen = models.URLField(blank=True, null=True)
    portfolio_picture = models.URLField(blank=True, null=True)

    def to_dict(self):
      return {"ID":self.id,"email":self.email,"password":self.password,"city":self.city,"state":self.state,"personal_website":self.personal_website,"first_name":self.first_name,"last_name":self.last_name,"remote":self.remote,"relocate":self.relocate,"linkedin":self.linkedin,"github":self.github,"twitter":self.twitter,"codepen":self.codepen,"portfolio_picture":self.portfolio_picture,"phone":self.phone,"about":self.about}

class Hire_Partners(Users):
    company_name = models.CharField(max_length=50, blank=True, null=True)
    def to_dict(self):
      return {"ID":self.id,"email":self.email,"password":self.password,"city":self.city,"state":self.state,"personal_website":self.personal_website,"company_name":self.company_name,"phone":self.phone,"about":self.about}
