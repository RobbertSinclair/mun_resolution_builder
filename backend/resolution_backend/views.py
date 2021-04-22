from django.shortcuts import render
from django.contrib.auth.models import User
from resolution_backend.models import Resolution, Clause, SubClause
from rest_framework import viewsets, permissions
from resolution_backend.serializers import UserSerializer, ResolutionSerializer, ClauseSerializer, SubClauseSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class ResolutionViewSet(viewsets.ModelViewSet):
    queryset = Resolution.objects.all()
    serializer_class = ResolutionSerializer
    permission_classes = [permissions.IsAuthenticated]

class ClauseViewSet(viewsets.ModelViewSet):
    queryset = Clause.objects.all()
    serializer_class = ClauseSerializer
    permission_classes = [permissions.IsAuthenticated]

class SubClauseViewSet(viewsets.ModelViewSet):
    queryset = SubClause.objects.all()
    serializer_class = SubClauseSerializer
    permission_classes = [permissions.IsAuthenticated]

# Create your views here.
