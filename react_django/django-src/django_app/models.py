from django.db import models

class State(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, default='')

class City(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, default='')
    state = models.ForeignKey(State, on_delete=models.CASCADE, null=True)

class Users(models.Model):
    # fields for both student and hiring partner
    id = models.AutoField(primary_key=True)
    email = models.EmailField()
    password = models.CharField(max_length=20, default='')
    student = models.BooleanField(default=True)
    state = models.ForeignKey(State, on_delete=models.CASCADE, null=True)
    city = models.ForeignKey(City, on_delete=models.CASCADE, null=True)
    bio = models.TextField(null=True, blank=True)
    personal_website = models.URLField(blank=True, null=True)
    # student fields
    first_name = models.CharField(max_length=20, default='')
    last_name = models.CharField(max_length=20, default='')
    remote = models.BooleanField(default=False)
    relocate = models.BooleanField(default=False)
    linkedin = models.URLField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    codepen = models.URLField(blank=True, null=True)
    portfolio_picture = models.URLField(blank=True, null=True)
    # hire partner fields
    company_name = models.CharField(max_length=50, blank=True, null=True)
    phone_number = models.CharField(max_length=10, null=True, blank=True)

    def __repr__(self):
        return self.first_name

# Below are the fields from the original schema that we can still use

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
    employerID = models.ForeignKey(Users,on_delete=models.CASCADE)
    positionTitle = models.CharField(max_length=400,unique=False)
    description = models.TextField(null=True, blank=True)
    postTime = models.CharField(max_length=400,unique=False)
    remote = models.BooleanField(default=False)