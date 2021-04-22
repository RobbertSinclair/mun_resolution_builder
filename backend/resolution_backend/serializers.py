from django.contrib.auth.models import User
from resolution_backend.models import Resolution, Clause, SubClause
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

class ResolutionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Resolution
        fields = ['submitter', 'title']

class ClauseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Clause
        fields = ['res', 'command', 'text', 'preamb']

class SubClauseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SubClause
        fields = ["parent_clause", "text"]