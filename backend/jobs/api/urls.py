from django.urls import path
from . import views

urlpatterns = [
    path('job/', views.JobListApiview.as_view()),
    path('job/create', views.JobCreateApiview.as_view()),
    path('job/<int:pk>/', views.JobDetailApiView.as_view()),
    path('job/<int:pk>/delete/', views.JobDeleteApiView.as_view()),
    path('job/<int:pk>/update/', views.JobUpdateApiView.as_view()),
    path('me/', views.getCurrent.as_view())
]
