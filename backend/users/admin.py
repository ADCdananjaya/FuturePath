from django.contrib import admin

# Register your models here.
from .models import User,Company,Student

admin.site.register(User)
admin.site.register(Company)
admin.site.register(Student)