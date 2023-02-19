from django.db import models
from django.contrib.auth import get_user_model


user=get_user_model()

# Create your models here.
class Job(models.Model):
    MODALITY = [
        ('R','Remote'),
        ('I','InOffice')
    ]
    title = models.CharField(max_length=50)
    publisher = models.ForeignKey(user,on_delete=models.CASCADE,related_name="Jobs")
    description =  models.TextField(null=True,blank=True)
    location = models.CharField(max_length=50,null=True,blank=True)
    salary =  models.DecimalField(max_digits=8,decimal_places=2,null=True,blank=True)
    modality = models.CharField(max_length=1,choices=MODALITY,null=True,blank=True)
    companyname = models.CharField(max_length=50)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    def short(self):
        return self.description[:100] + '...'