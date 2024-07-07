from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

class MyUserManager(BaseUserManager):
    def create_user(self, email, nombres, apellidos, contraseña, dni, telefono, pais, ciudad, genero, **extra_fields):
        if not email:
            raise ValueError('El email es obligatorio')
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            nombres=nombres,
            apellidos=apellidos,
            dni=dni,
            telefono=telefono,
            pais=pais,
            ciudad=ciudad,
            genero=genero,
            **extra_fields
        )
        user.set_password(contraseña)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, nombres, apellidos, contraseña, dni, telefono, pais, ciudad, genero, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, nombres, apellidos, contraseña, dni, telefono, pais, ciudad, genero, **extra_fields)


class Usuario(AbstractBaseUser):
    email = models.EmailField(unique=True)
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    dni = models.CharField(max_length=20)
    telefono = models.CharField(max_length=20)
    pais = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=100)
    genero = models.CharField(max_length=20)
    fecha_registro = models.DateTimeField(auto_now_add=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = MyUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nombres', 'apellidos', 'dni', 'telefono', 'pais', 'ciudad', 'genero']

    def __str__(self):
        return f"{self.nombres} {self.apellidos}"


from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateTimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    featured = models.BooleanField(default=False)

    def __str__(self):
        return self.title

from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateTimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    featured = models.BooleanField(default=False)

    def __str__(self):
        return self.title
