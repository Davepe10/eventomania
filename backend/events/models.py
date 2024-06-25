from django.db import models

# Create your models here.

from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    expiry_date = models.DateField(max_length=20)
    image = models.CharField(max_length=200)

    def __str__(self):
        return self.title
    

