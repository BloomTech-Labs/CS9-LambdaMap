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

class Students(models.Model):
    username = models.CharField(max_length=50, default='', unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=50, default='')
    firstName = models.CharField(max_length=50, default='', unique=True)
    lastName = models.CharField(max_length=50, default='', unique=True)
    linkedIn = models.CharField(max_length=50, default='', unique=True)
    twitter = models.CharField(max_length=50, default='', unique=True)
    github = models.CharField(max_length=50, default='', unique=True)
    city = models.CharField(max_length=50, default='', unique=True)
    state = models.CharField(max_length=50, default='', unique=True)
    relocate = models.BooleanField(default=False)
    remote = models.BooleanField(default=False)

class Employers(models.Model):
  username = models.CharField(max_length=50, default='', unique=True)
  email = models.EmailField(unique=True)
  password = models.CharField(max_length=50, default='')
  firstName = models.CharField(max_length=50, default='', unique=True)
  lastName = models.CharField(max_length=50, default='', unique=True)
  companyName = models.CharField(max_length=50, default='', unique=True)
  city = models.CharField(max_length=50, default='', unique=True)
  state = models.CharField(max_length=50, default='', unique=True)
  currentlySubscribed = models.BooleanField(default=False)

class Student_Phones(models.Model):
    userID = models.ForeignKey(Students,on_delete=models.CASCADE)
    number = models.CharField(max_length=20,unique=True)


class Employer_Phones(models.Model):
    userID = models.ForeignKey(Employers,on_delete=models.CASCADE)
    number = models.CharField(max_length=20,unique=True)



