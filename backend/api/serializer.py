from rest_framework import serializers
from .models import Stud,Fees,AnnualDay

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