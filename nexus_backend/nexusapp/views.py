from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializer import *
from rest_framework import status


# Create your views here.
class UserView(APIView):

    serializer_class =  UserSerializer

    def get(self, request):
        user = [{'user': output.user, 'organizaton': output.organizaton, 'role': output.role}
                     for output in User.objects.all()]
        return Response(output)            


    def post(self, request):
        # print(request.data)
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)