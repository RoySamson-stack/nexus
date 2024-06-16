from rest_framework import serializers
from .models import * 


class UserProfileSerializer(serializers.ModelSerializer): 
    class Meta:
        model = UserProfile 
        fields = ['username' , 'organization', 'role']

    
    def create(self, validated_data):
        return UserProfile.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.organization = validated_data.get('organization', instance.organization)
        instance.role = validated_data.get('role', instance.role)
        instance.save()
        return instance


