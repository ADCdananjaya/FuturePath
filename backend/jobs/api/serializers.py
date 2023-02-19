from rest_framework import serializers
from jobs.models import Job

class JobListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['id', 'title', 'publisher', 'location','description','salary','modality','companyname']

class JobDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['title', 'location','description','salary','modality','companyname']