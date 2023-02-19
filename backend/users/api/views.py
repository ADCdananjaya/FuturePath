from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from .serializers import StudentSignupSerializer,CompanySignupSerializer
from rest_framework import generics
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView


class CompanySignupView(generics.GenericAPIView):
    serializer_class=CompanySignupSerializer
    def post(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        return Response({
            "token":Token.objects.get(user=user).key,
            "sucess": True
        })


class StudentSignupView(generics.GenericAPIView):
    serializer_class=StudentSignupSerializer
    def post(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        return Response({
            "token":Token.objects.get(user=user).key,
            "sucess": True
        })

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer=self.serializer_class(data=request.data, context={'request':request})
        serializer.is_valid(raise_exception=True)
        user=serializer.validated_data['user']
        token, created=Token.objects.get_or_create(user=user)
        return Response({
            'token':token.key,
            'user_id':user.pk,
            'sucess':True
        })

class LogoutView(APIView):
    def post(self, request, format=None):
        request.auth.delete()
        return Response({
            'sucess':True
        })

