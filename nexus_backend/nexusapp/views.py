from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import response
from . serializer import *


# Create your views here.
class ReactView(APIView):
    def get(self, request):
        output = [{'employee': output.eployee, 
                    'department': output.deaprtment}
        
                    for output in React.object.all()]
        return Response(output)            
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)    