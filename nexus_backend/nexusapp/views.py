from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializer import *
from rest_framework import status


# Create your views here.
class UserView(APIView):
    serializer_class =  UserProfileSerializer
    
    def get(self, request):
        users = UserProfile.objects.all()
        output = [{'username': output.username, 'organization': output.organization, 'role': output.role} for output in users]
        return Response(output)  
                
    # def get(self, request):
    #     users = UserProfile.objects.all()
    #     serializer = UserProfileSerializer(users, many=True)
    #     return Response(serializer.data)

    def post(self, request):
        # print(request.data)
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)