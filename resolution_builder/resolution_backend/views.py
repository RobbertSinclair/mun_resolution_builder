from django.shortcuts import render
from django.contrib.auth.models import User
from resolution_backend.models import Resolution, Clause, SubClause
from rest_framework import viewsets, permissions, status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from resolution_backend.serializers import UserSerializer, ResolutionSerializer, ClauseSerializer, SubClauseSerializer, CreateResolutionSerializer

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

class CreateResolutionView(APIView):
    serializer_class = CreateResolutionSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            title = serializer.data.get("title")
            clauses = serializer.data.get("clauses")
            country = serializer.data.get("country")
            if request.user.is_authenticated:
                res = Resolution.objects.create(title=title, country=country, user=request.user)
                res.save()
                for clause in clauses:
                    new_clause = Clause.objects.create(command=clause["command"], body=clause["body"], preamb=clause["preamb"], res=res)
                    new_clause.save()

                return Response(ResolutionSerializer(res).data, status=status.HTTP_201_CREATED)
                    




            

