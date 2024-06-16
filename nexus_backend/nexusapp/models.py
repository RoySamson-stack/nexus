from django.db import models
from django.contrib.auth.models import User 

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    organization = models.CharField(max_length=255)
    role = models.CharField(max_length=255)


    def __str__(self):
        return self.user.username


class ThreatIntelligenceModel(models.Model):
    threat_type = models.CharField(max_length=255)
    severity = models.CharField(max_length=255)
    description = models.TextField()