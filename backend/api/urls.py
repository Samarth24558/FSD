from django.urls import path
from . import views

urlpatterns = [
    path('',views.get),
    path("addstud",views.addstud),
    path("setstud",views.setstud),
    path("get/<str:stud_id>",views.searchstud),
    path("updatestud/<str:stud_id>",views.update_stud),
    path("deletestud/<str:stud_id>",views.deletestud),
    path("converttoxl",views.convert_to_excel),
    path('fees',views.getfees),
    path('fees/<int:invoice_no>',views.searchfees),
    path('addfees',views.addfees),
    path('deletefees/<str:stud>',views.deletefees),
    path("updatefees/<int:invoice_no>",views.update_fees),
    path("updateannualday/<int:invoice_no>",views.update_annualday),
    path('getannualday',views.getannualday),
    path('getannualday/<int:invoice_no>',views.searchannualday),
    path('addannualday',views.add_annualday),
    path('deleteannualday/<int:invoice_no>',views.deleteannualday),




]