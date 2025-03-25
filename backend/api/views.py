from rest_framework.response import Response
from rest_framework import status
from rest_framework import status
from django.shortcuts import render,redirect
from .models import Stud,Fees,AnnualDay,CIE_Stud_Written,CIE_Stud_Skill
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.models import User
from .serializer import Serializerstud,Serializerfees,Serializerannualday,Serializercie_stud_written,Serializercie_stud_skill
from rest_framework.decorators import api_view
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token
import pandas as pd


from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({"csrfToken": csrf_token})


@api_view(['POST'])
def loginUser(request):
    username = request.data.get("username")
    password = request.data.get("password")
 

    if not username or not password:
        return Response({'error': 'Username and password are required'}, status=400)

    user = authenticate(username=username, password=password)
    
    if user is not None:
        login(request, user)
        return Response({'message': f'Login successful {username},{password}'})
    else:
        print("Authentication failed. Invalid username or password.")
        return Response({'error': 'Invalid credentials'}, status=401)

# ================= GET Requestes =================
@api_view(['GET'])
def get(request):
    items=Stud.objects.all()
    serializer=Serializerstud(items,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_cie_written(request):
    items=CIE_Stud_Written.objects.all()
    serializer=Serializercie_stud_written(items,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_cie_skill(request):
    items=CIE_Stud_Skill.objects.all()
    serializer=Serializercie_stud_skill(items,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def setstud(request):
    items=Stud.objects.order_by("stud_name")
    serializer=Serializerstud(items,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getfees(request):
    items=Fees.objects.all()
    serializer=Serializerfees(items,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def searchfees(request,invoice_no):
    items=Fees.objects.filter(invoice_no=invoice_no)
    serializer=Serializerfees(items,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def searchannualday(request,invoice_no):
    items=AnnualDay.objects.filter(invoice_no=invoice_no)
    serializer=Serializerannualday(items,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getannualday(request):
    items=AnnualDay.objects.all()
    serializer=Serializerannualday(items,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def searchstud(request,stud_id):
    items=Stud.objects.filter(stud_id=stud_id)
    serializer=Serializerstud(items,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_cie_written2(request,stud):
    items=CIE_Stud_Written.objects.filter(stud=stud)
    serializer=Serializercie_stud_written(items,many=True)
    return Response(serializer.data)



@api_view(['GET'])
def get_cie_skill2(request,stud):
    items=CIE_Stud_Skill.objects.filter(stud=stud)
    serializer=Serializercie_stud_skill(items,many=True)
    return Response(serializer.data)





# ================= POST Requestes ==================

@api_view(['POST'])
def addstud(request):
    serializer=Serializerstud(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"Student Added"})
    return Response(serializer.errors,status=400)

@api_view(['POST'])
def add_cie_written(request):
    serializer=Serializercie_stud_written(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"Data Added"})
    return Response(serializer.errors,status=400)

@api_view(['POST'])
def add_cie_skill(request):
    serializer=Serializercie_stud_skill(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"Data Added"})
    return Response(serializer.errors,status=400)

# ================= POST Requestes to convert excel ==================


@api_view(['POST'])
def convert_to_excel(request):
    items=request.data
    df=pd.DataFrame(items)  
    df.to_excel(r"C:\Users\user\Documents\students.xlsx",index=False,engine='openpyxl')
    return Response({"message":"Data exported to excel path: Documents\students.xlsx  ✅"},status=status.HTTP_200_OK)

    


@api_view(['POST'])
def addfees(request):
    serializer=Serializerfees(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"Fees Added"})
    return Response(serializer.errors,status=400)


@api_view(['POST'])
def add_annualday(request):
    serializer=Serializerannualday(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"Annual day Added"})
    return Response(serializer.errors,status=400)

# ================= PUT Requestes ==================

@api_view(['PUT'])
def update_stud(request, stud_id):
    try:
        student = Stud.objects.get(stud_id=stud_id)
    except Stud.DoesNotExist:
        return Response({"error": "Student not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = Serializerstud(student, data=request.data, partial=(request.method == "PUT"))
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_cie_written(request, stud_id):
    try:
        student = CIE_Stud_Written.objects.get(stud_id=stud_id)
    except CIE_Stud_Written.DoesNotExist:
        return Response({"error": "Student not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = Serializercie_stud_written(student, data=request.data, partial=(request.method == "PUT"))
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_cie_skill(request, stud_id):
    try:
        student = CIE_Stud_Skill.objects.get(stud_id=stud_id)
    except CIE_Stud_Skill.DoesNotExist:
        return Response({"error": "Student not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = Serializercie_stud_skill(student, data=request.data, partial=(request.method == "PUT"))
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['PUT'])
def update_fees(request, invoice_no):
    try:
        student = Fees.objects.get(invoice_no=invoice_no)
    except Fees.DoesNotExist:
        return Response({"error": "Student not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = Serializerfees(student, data=request.data, partial=(request.method == "PUT"))
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_annualday(request, invoice_no):
    try:
        student = AnnualDay.objects.get(invoice_no=invoice_no)
    except AnnualDay.DoesNotExist:
        return Response({"error": "Recorde not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = Serializerannualday(student, data=request.data, partial=(request.method == "PUT"))
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ================= DELETE Requestes ==================



@api_view(['DELETE'])
def deletestud(request,stud_id):
    try:
        data=Stud.objects.get(stud_id=stud_id)
        data.delete()
        return Response({"message":"Student deleted"},status=status.HTTP_204_NO_CONTENT)
    except Stud.DoesNotExist:
        return Response({"message":f"Student with id {id} does not exists"}, status=status.HTTP_404_NOT_FOUND)



@api_view(['DELETE'])
def delete_cie_written(request,invoice_no):
    try:
        data=CIE_Stud_Written.objects.get(invoice_no=invoice_no)
        data.delete()
        return Response({"message":"Student deleted"},status=status.HTTP_204_NO_CONTENT)
    except CIE_Stud_Written.DoesNotExist:
        return Response({"message":f"Student with id {invoice_no} does not exists"}, status=status.HTTP_404_NOT_FOUND)



@api_view(['DELETE'])
def delete_cie_skill(request,invoice_no):
    try:
        data=CIE_Stud_Skill.objects.get(invoice_no=invoice_no)
        data.delete()
        return Response({"message":"Student deleted"},status=status.HTTP_204_NO_CONTENT)
    except CIE_Stud_Skill.DoesNotExist:
        return Response({"message":f"Student with id {id} does not exists"}, status=status.HTTP_404_NOT_FOUND)



@api_view(['DELETE'])
def deletefees(request,stud):
    try:
        data=Fees.objects.get(stud=stud)
        data.delete()
        return Response({"message":"Fees details deleted"},status=status.HTTP_204_NO_CONTENT)
    except Fees.DoesNotExist:
        return Response({"message":f"Student with id {id} does not exists"}, status=status.HTTP_404_NOT_FOUND)



@api_view(['DELETE'])
def deleteannualday(request,invoice_no):
    try:
        data=AnnualDay.objects.get(invoice_no=invoice_no)
        data.delete()
        return Response({"message":"Student deleted"},status=status.HTTP_204_NO_CONTENT)
    except AnnualDay.DoesNotExist:
        return Response({"message":f"Student with id {id} does not exists"}, status=status.HTTP_404_NOT_FOUND)