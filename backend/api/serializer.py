from rest_framework import serializers
from .models import Stud,Fees,AnnualDay,CIE,CIE_Stud_Written,CIE_Stud_Skill

class Serializerstud(serializers.ModelSerializer):
    class Meta:
        model=Stud
        fields='__all__'

class Serializerfees(serializers.ModelSerializer):
    stud = serializers.PrimaryKeyRelatedField(queryset=Stud.objects.all()) 
    class Meta:
        model=Fees
        fields='__all__'

class Serializerannualday(serializers.ModelSerializer):
    student = serializers.PrimaryKeyRelatedField(queryset=Stud.objects.all()) 
    class Meta:
        model=AnnualDay
        fields='__all__'




class Serializercie_stud_written(serializers.ModelSerializer):
    stud = serializers.PrimaryKeyRelatedField(queryset=Stud.objects.all()) 
    class Meta:
        model=CIE_Stud_Written
        fields='__all__'



class Serializercie_stud_skill(serializers.ModelSerializer):
    stud = serializers.PrimaryKeyRelatedField(queryset=Stud.objects.all()) 
    
    marks_1 = serializers.IntegerField(required=False, allow_null=True)
    marks_2 = serializers.IntegerField(required=False, allow_null=True)
    marks_3 = serializers.IntegerField(required=False, allow_null=True)
    marks_4 = serializers.IntegerField(required=False, allow_null=True)
    class Meta:
        model=CIE_Stud_Skill
        fields='__all__'