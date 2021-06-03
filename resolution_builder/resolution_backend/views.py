from django.shortcuts import render
from django.contrib.auth.models import User
from resolution_backend.models import Resolution, Clause, SubClause
from rest_framework import viewsets, permissions, status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from resolution_backend.serializers import UserSerializer, ResolutionSerializer, ClauseSerializer, SubClauseSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class ResolutionViewSet(viewsets.ModelViewSet):
    queryset = Resolution.objects.all()
    serializer_class = ResolutionSerializer

class GetResolution(APIView):
    serializer_class = ResolutionSerializer
    lookup_url_kwarg = "id"

    def get(self, request, format=None):
        id = request.GET.get(self.lookup_url_kwarg)
        if id != None:
            resolution = Resolution.objects.filter(id=id)
            if len(resolution) > 0:
                data = ResolutionSerializer(resolution[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({"Resolution Not Found": "Invalid ID"}, status=status.HTTP_404_NOT_FOUND)
        
        return Response({"Bad Request": "Id parameter not found in request"}, status=status.HTTP_400_BAD_REQUEST)


class ClauseViewSet(viewsets.ModelViewSet):
    queryset = Clause.objects.all()
    serializer_class = ClauseSerializer
    

class SubClauseViewSet(viewsets.ModelViewSet):
    queryset = SubClause.objects.all()
    serializer_class = SubClauseSerializer

# Create your views here.
