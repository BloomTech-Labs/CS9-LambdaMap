from django.db import models


class Users(models.Model):
    username = models.CharField(max_length=50, default='', unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=50, default='')
    city = models.CharField(max_length=50, default='', unique=False)
    state = models.CharField(max_length=50, default='', unique=False)
    def as_dict(self):
      return {
        "id":self.id,
        "username":self.username,
        "email":self.email,
        "password":self.password
      }

    def __repr__(self):
        return self.username

    def __str__(self):
        return self.username

class Students(models.Model):
    userID = models.ForeignKey(Users,on_delete=models.CASCADE)
    firstName = models.CharField(max_length=50, default='', unique=False)
    lastName = models.CharField(max_length=50, default='', unique=False)
    linkedIn = models.CharField(max_length=50, default='', unique=True)
    twitter = models.CharField(max_length=50, default='', unique=True)
    github = models.CharField(max_length=50, default='', unique=True)
    relocate = models.BooleanField(default=False)
    remote = models.BooleanField(default=False)

class Employers(models.Model):
    userID = models.ForeignKey(Users,on_delete=models.CASCADE)
    employerName = models.CharField(max_length=50, default='', unique=True)
    currentlySubscribed = models.BooleanField(default=False)

class Student_Phones(models.Model):
    studentID = models.ForeignKey(Students,on_delete=models.CASCADE)
    number = models.CharField(max_length=20,unique=True)

class Employer_Phones(models.Model):
    employerID = models.ForeignKey(Employers,on_delete=models.CASCADE)
    number = models.CharField(max_length=20,unique=True)

class Student_Favorites(models.Model):
    studentID = models.ForeignKey(Students,on_delete=models.CASCADE)
    employerID = models.ForeignKey(Employers,on_delete=models.CASCADE)

class Employer_Favorites(models.Model):
    employerID = models.ForeignKey(Employers,on_delete=models.CASCADE)
    studentID = models.ForeignKey(Students,on_delete=models.CASCADE)

class Messages(models.Model):
    employerID = models.ForeignKey(Employers,on_delete=models.CASCADE)
    studentID = models.ForeignKey(Students,on_delete=models.CASCADE)
    content = models.CharField(max_length=400,unique=False)
    postTime = models.CharField(max_length=400,unique=False)

class Job_Listings(models.Model):
    employerID = models.ForeignKey(Employers,on_delete=models.CASCADE)
    positionTitle = models.CharField(max_length=400,unique=False)
    postTime = models.CharField(max_length=400,unique=False)
    remote = models.BooleanField(default=False)

