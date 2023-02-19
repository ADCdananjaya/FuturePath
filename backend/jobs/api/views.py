from rest_framework.response import Response
from jobs.models import Job
from .serializers import JobListSerializer,JobDetailsSerializer
from rest_framework.views import APIView
from rest_framework.permissions import BasePermission,SAFE_METHODS,IsAuthenticatedOrReadOnly,IsAuthenticated
from rest_framework.generics import ListAPIView,RetrieveAPIView,DestroyAPIView,CreateAPIView,RetrieveUpdateAPIView

from users.api.permissions import IsCompanyUser

#Custom Permission
class EditDeletePermission(BasePermission):
     message = "Author only"

     def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in SAFE_METHODS:
            return True

        # Instance must have an attribute named `owner`.
        return obj.publisher == request.user





class JobListApiview(ListAPIView):
        queryset = Job.objects.all()
        serializer_class = JobListSerializer


class JobCreateApiview(CreateAPIView):
        queryset = Job.objects.all()
        serializer_class = JobDetailsSerializer
        permission_classes = [IsAuthenticatedOrReadOnly,IsCompanyUser]
        
        def perform_create(self, serializer):
           serializer.save(publisher=self.request.user)


class JobDetailApiView(RetrieveAPIView):
        queryset = Job.objects.all()
        serializer_class = JobDetailsSerializer


class JobUpdateApiView(RetrieveUpdateAPIView):
        queryset = Job.objects.all()
        serializer_class = JobDetailsSerializer
        permission_classes = [EditDeletePermission,IsAuthenticated,IsCompanyUser]
        def perform_update(self, serializer):
           serializer.save(publisher=self.request.user)


class JobDeleteApiView(DestroyAPIView):
        queryset = Job.objects.all()
        serializer_class = JobListSerializer
        permission_classes = [EditDeletePermission,IsAuthenticated,IsCompanyUser]
        




#Get UserProfile
class getCurrent(APIView):
        def get(self,request):
                quearset = Job.objects.filter(publisher_id=request.user.id)
                serializer = JobListSerializer(
                        quearset,many=True
                )
                return Response(serializer.data)


    

