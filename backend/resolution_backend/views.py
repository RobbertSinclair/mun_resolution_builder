from django.shortcuts import render
from django.contrib.auth.models import User
from resolution_backend.models import Resolution, Clause, SubClause
from rest_framework import viewsets, permissions
from resolution_backend.serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated] 

# Create your views here.
