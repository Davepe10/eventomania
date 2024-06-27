from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from .models import Event
from .forms import EventForm  # Debes crear un formulario para los eventos

def crear_evento(request):
    if request.method == 'POST':
        form = EventForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('evento_creado')  # Redirige a la página de confirmación o a donde desees
    else:
        form = EventForm()
    
    return render(request, 'crear_evento.html', {'form': form})


# En views.py de tu aplicación Django
from django.http import JsonResponse
from .models import Event

def obtener_eventos(request):
    eventos = Event.objects.all().values()  # Obtener todos los eventos como diccionarios
    return JsonResponse(list(eventos), safe=False)
