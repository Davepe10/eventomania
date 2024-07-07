from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login

from .serializers import UsuarioSerializer
from .models import Usuario

@api_view(['POST'])
def registro_api_view(request):
    serializer = UsuarioSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def sesion_api_view(request):
    email = request.data.get('email')
    contraseña = request.data.get('contraseña')
    usuario = authenticate(request, username=email, password=contraseña)
    
    if usuario is not None:
        login(request, usuario)
        return Response('Inicio de sesión exitoso', status=status.HTTP_200_OK)
    else:
        return Response('Credenciales inválidas', status=status.HTTP_401_UNAUTHORIZED)


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

@method_decorator(csrf_exempt, name='dispatch')  # Para deshabilitar la protección CSRF en esta vista
class LoginAPIView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        contraseña = request.data.get('contraseña')

        if email is None or contraseña is None:
            return Response({'error': 'Por favor, proporciona email y contraseña'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(email=email, password=contraseña)

        if not user:
            return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)

        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_200_OK)
