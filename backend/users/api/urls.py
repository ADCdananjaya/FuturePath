from django.urls import path
from .views import StudentSignupView,CompanySignupView,CustomAuthToken,LogoutView
from . import views
urlpatterns=[
   path('signup/company', CompanySignupView.as_view()),
   path('signup/student', StudentSignupView.as_view()),
   path('login',CustomAuthToken.as_view(), name='auth-token'),
   path('logout', LogoutView.as_view(), name='logout-view'),



   # path('company/', CompanyListApiview.as_view()),
   # path('company/me', CompanyView.as_view()),
   # # path('company/<int:pk>/update', CompanyUpdateView.as_view()),
   
   # path('student/me', StudentOnlyView.as_view()),
]