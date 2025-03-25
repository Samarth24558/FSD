from django.urls import path
from . import views


urlpatterns = [
    path('',views.get),
    path('csrf-token',views.get_csrf_token),

    path("addstud",views.addstud),
    path("getciewritten",views.get_cie_written),
    path("getciewritten/<str:stud>",views.get_cie_written2),
    path("getcieskill/<str:stud>",views.get_cie_skill2),


    path("addciewritten",views.add_cie_written),
    path("updateciewritten",views.update_cie_written),
    path("deleteciewritten/<int:invoice_no>/",views.delete_cie_written),


    path("getcieskill",views.get_cie_skill),
    path("addcieskill",views.add_cie_skill),
    path("updatecieskill",views.update_cie_skill),
    path("deletecieskill/<int:invoice_no>/",views.delete_cie_skill),



    path("setstud",views.setstud),
    


    
    path("get/<str:stud_id>",views.searchstud),
    path("updatestud/<str:stud_id>",views.update_stud),
    path("deletestud/<str:stud_id>",views.deletestud),
    path("converttoxl",views.convert_to_excel),
    path('fees',views.getfees),
    path('loginUser',views.loginUser),
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