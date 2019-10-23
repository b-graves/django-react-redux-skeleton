from django.db import models
from django.contrib.auth.models import User

class Interview(models.Model):
    name = models.CharField(max_length=100)
    owner = models.ForeignKey(User, related_name="interviews", on_delete=models.CASCADE, null=True)