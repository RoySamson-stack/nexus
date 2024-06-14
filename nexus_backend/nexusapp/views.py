from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializer import *
from rest_framework import status


# Create your views here.
class ReactView(APIView):

    serializer_class = ReactSerializer

    def get(self, request):
        output = [{'employee': output.employee, 'department': output.department}
                    for output in React.objects.all()]
        return Response(output)            


    def post(self, request):
        # print(request.data)
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)