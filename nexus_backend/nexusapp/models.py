from django.db import models
from django.contrib.auth.models import User 

# Create your models here.
class UserProfile(models.Model):
    username = models.CharField(max_length=255, unique=True)
    organization = models.CharField(max_length=255, default='default_organization')
    role = models.CharField(max_length=255)


    def __str__(self):
        return f'{self.username}'


class ThreatIntelligenceModel(models.Model):
    threat_type = models.CharField(max_length=255)
    severity = models.CharField(max_length=255)
    description = models.TextField()
    source = models.CharField(max_length=255)
    reported_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f'{self.threat_type} - {self.severity}'



class ComplianceLOg(models.Model):
    action = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)
    performed_by = models.CharField(max_length=255)
    details = models.TextField() 


    def __str__(self):
        return f'{self.action} at {self.timestamp}'      