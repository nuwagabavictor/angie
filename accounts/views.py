from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import BasicAuthentication, SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response


# Create your views here.

@api_view(['GET'])
@authentication_classes([BasicAuthentication, SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def profile(request, format= None):
    context ={
        'user': str(request.user.email),
        'auth': str(request.auth),
    }
    
    return Response(context)

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'username': user.username,
            'firstname': user.firstname,
            'lastname': user.lastname,
            'user_id': user.pk,
            'email': user.email
        })
