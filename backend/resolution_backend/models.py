from django.db import models
from django.contrib.auth.models import User

class Resolution(models.Model):

    submitter = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)

class Clause(models.Model):
    res = models.ForeignKey(Resolution, on_delete=models.CASCADE)
    command = models.CharField(max_length=30)
    text = models.CharField(max_length=2000)
    preamb = models.BooleanField()

class SubClause(models.Model):
    parent_clause = models.ForeignKey(Clause, on_delete=models.CASCADE)
    text = models.CharField(max_length=2000)


# Create your models here.
