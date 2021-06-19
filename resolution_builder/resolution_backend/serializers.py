from django.contrib.auth.models import User
from resolution_backend.models import Resolution, Clause, SubClause
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

class SubClauseSerializer(serializers.ModelSerializer):
    main_clause_id = serializers.PrimaryKeyRelatedField(queryset=Clause.objects.all(), source='parent_clause.id')
    class Meta:
        model = SubClause
        fields = ["parent_clause", "body", "main_clause_id"]

class ClauseSerializer(serializers.ModelSerializer):
    sub_clauses = SubClauseSerializer(many=True, read_only=True)
    resolution_id = serializers.PrimaryKeyRelatedField(queryset=Resolution.objects.all(), source='res.id')
    class Meta:
        model = Clause
        fields = ['res', 'command', 'body', 'preamb', 'resolution_id', 'sub_clauses' ]


class ResolutionSerializer(serializers.ModelSerializer):
    clauses = ClauseSerializer(many=True, read_only=True)
    class Meta:
        model = Resolution
        fields = ["id", "title", "submitter", "clauses", "country"]

class CreateResolutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resolution
        fields = ["title", "country", "clauses"]




