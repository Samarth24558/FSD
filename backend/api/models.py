from django.db import models

import random

from datetime import datetime


# Create your models here.

class Stud(models.Model):
    stud_id=models.CharField(max_length=10,primary_key=True)
    stud_name=models.CharField(max_length=20)
    stud_dob=models.DateField()
    stud_gender=models.CharField(max_length=10)
    stud_location=models.CharField(max_length=50)
    stud_contact=models.BigIntegerField(unique=True) 
    stud_parentscontact=models.BigIntegerField(unique=True) 
    stud_email=models.CharField(max_length=50,unique=True)
    stud_branch=models.CharField(max_length=20)
    stud_yoa=models.CharField(max_length=10)

def create_new_ref_number():
      return str(random.randint(100000, 999999))

class Fees(models.Model):
    invoice_no=models.BigIntegerField(
           blank=True,
           editable=False,
           unique=True,
           default=create_new_ref_number
)
    stud=models.ForeignKey(Stud,on_delete=models.CASCADE,unique=True)
    total_fees=models.IntegerField()
    fees_paid=models.IntegerField()
    paid_date=models.DateField()

class AnnualDay(models.Model):
    invoice_no=models.BigIntegerField(
           blank=True,
           editable=False,
           unique=True,
           default=create_new_ref_number)
    student=models.ForeignKey(Stud,on_delete=models.CASCADE)
    date=models.DateField(default=datetime.today(),blank=True)
    compitation_name=models.CharField(max_length=20)

class CIE(models.Model):
    stud=models.ForeignKey(Stud,on_delete=models.CASCADE)
    sem=models.IntegerField()
    no_cie=models.IntegerField()
    attended=models.IntegerField()
    written=models.IntegerField()
    skill=models.IntegerField()

class CIE_Stud_Written(models.Model):
    invoice_no=models.BigIntegerField(
        blank=True,
        editable=False,
        unique=True,
        default=create_new_ref_number)
    stud=models.ForeignKey(Stud,on_delete=models.CASCADE)
    sem=models.IntegerField()

    subject_name_1=models.CharField(max_length=100,blank=True, default=None)
    subject_name_2=models.CharField(max_length=100,blank=True, default=None)
    subject_name_3=models.CharField(max_length=100,blank=True, default=None)
    subject_name_4=models.CharField(max_length=100,blank=True, default=None)
    

    marks_1=models.IntegerField(null=True, blank=True, default=None)
    marks_2=models.IntegerField(null=True, blank=True, default=None)
    marks_3 =models.IntegerField(null=True, blank=True, default=None)
    marks_4 =models.IntegerField(null=True, blank=True, default=None)
    cie_no = models.IntegerField()




class CIE_Stud_Skill(models.Model):
    invoice_no=models.BigIntegerField(
        blank=True,
        editable=False,
        unique=True,
        default=create_new_ref_number)
    stud=models.ForeignKey(Stud,on_delete=models.CASCADE)
    sem=models.IntegerField()

    subject_name_1=models.CharField(max_length=100,blank=True, default=None)
    subject_name_2=models.CharField(max_length=100,blank=True, default=None)
    subject_name_3=models.CharField(max_length=100,blank=True, default=None)
    subject_name_4=models.CharField(max_length=100,blank=True, default=None)


    marks_1 = models.IntegerField(null=True, blank=True)
    marks_2 = models.IntegerField(null=True, blank=True)
    marks_3 = models.IntegerField(null=True, blank=True)
    marks_4 = models.IntegerField(null=True, blank=True)
    cie_no = models.IntegerField()






