#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'eventomania_backend.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()



from django.contrib.auth.models import BaseUserManager

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

