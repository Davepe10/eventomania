from django.urls import path
from .views import registro_api_view, sesion_api_view
from django.urls import path
from .views import LoginAPIView

urlpatterns = [
    path('registro/', registro_api_view, name='registro'),
    path('api/login/', LoginAPIView.as_view(), name='login'),
]





