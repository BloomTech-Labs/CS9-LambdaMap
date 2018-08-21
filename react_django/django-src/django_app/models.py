from django.db import models

class Users(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=20, default='')
    city = models.CharField(max_length=50, blank=True, null=True)
    state = models.CharField(max_length=50, blank=True, null=True)
    personal_website = models.URLField(blank=True, null=True)
    phone = models.CharField(max_length=50, blank=True, null=True)


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
      return {"email":self.email,"password":self.password,"city":self.city,"state":self.state,"personalWebsite":self.personal_website,"firstName":self.first_name,"lastName":self.last_name,"remote":self.remote,"relocate":self.relocate,"linkedin":self.linkedin,"github":self.github,"twitter":self.twitter,"codepen":self.codepen,"portfolioPicture":self.portfolio_picture,"phone":self.phone}

class Hire_Partners(Users):
    company_name = models.CharField(max_length=50, blank=True, null=True)
    def to_dict(self):
      return {"email":self.email,"password":self.password,"city":self.city,"state":self.state,"personalWebsite":self.personal_website,"companyName":self.company_name,"phone":self.phone}
