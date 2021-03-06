from django.db import models
from django.contrib.auth.models import User

class Resolution(models.Model):

    submitter = models.ForeignKey(User, on_delete=models.CASCADE)
    country = models.CharField(max_length=10, default="un")
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Clause(models.Model):
    res = models.ForeignKey(Resolution, on_delete=models.CASCADE, related_name='clauses')
    command = models.CharField(max_length=30)
    body = models.TextField()
    preamb = models.BooleanField()

    def __str__(self):
        if self.preamb:
            return f"PREAMB CLAUSE with Command: {command}"
        else:
            return f"OPER CLAUSE with command: {command}"

class SubClause(models.Model):
    parent_clause = models.ForeignKey(Clause, on_delete=models.CASCADE, related_name='sub_clauses')
    body = models.TextField()


# Create your models here.
