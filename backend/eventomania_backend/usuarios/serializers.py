from rest_framework import serializers
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    contraseña = serializers.CharField(write_only=True)

    class Meta:
        model = Usuario
        fields = ['id', 'email', 'nombres', 'apellidos', 'dni', 'telefono', 'pais', 'ciudad', 'genero', 'contraseña']

    def create(self, validated_data):
        contraseña = validated_data.pop('contraseña')
        usuario = Usuario.objects.create(**validated_data)
        usuario.set_password(contraseña)
        usuario.save()
        return usuario
