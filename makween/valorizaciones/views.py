from django.shortcuts import render

# Create your views here.


from .models import Alumno,Genero


def index (request):
    valorizaciones= valorizaciones.objects.all()
    context={"alumnos":valorizaciones}
    return render(request,'valorizaciones/template/index.html', context)