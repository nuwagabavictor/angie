from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.

@api_view(['GET'])
def index(request, format= None):
    context ={
        'wmsg' : 'Welcome to stack dev'
    }
    
    return Response(context)
    