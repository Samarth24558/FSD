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
    stud=models.ForeignKey(Stud,on_delete=models.CASCADE)
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
    invoice_no=models.BigIntegerField(
        blank=True,
        editable=False,
        unique=True,
        default=create_new_ref_number)
    student_id=models.ForeignKey(Stud,on_delete=models.CASCADE)
    cie_no=models.IntegerField()
    branch=models.CharField(max_length=20)
    subject_code=models.CharField(max_length=20)
    subject_name=models.CharField(max_length=20)
    marks_obtained=models.BigIntegerField()
    total_marks=models.BigIntegerField()

