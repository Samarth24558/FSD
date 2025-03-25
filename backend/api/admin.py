from django.contrib import admin
from .models import Stud,Fees,AnnualDay,CIE,CIE_Stud_Skill,CIE_Stud_Written
# Register your models here.
admin.site.register(Stud)
admin.site.register(Fees)
admin.site.register(AnnualDay)
admin.site.register(CIE)
admin.site.register(CIE_Stud_Written)

admin.site.register(CIE_Stud_Skill)







