'''
class Todo(models.Model)
    user -- name of user
    title -- title of task
    complete -- completed or not
    created -- time at created
'''
from django.db import models
# from django.contrib.auth.models import User


class Todo(models.Model):
    # user = models.ForeignKey(User, related_name='todos',
    #                          on_delete=models.CASCADE, null=False)
    title = models.CharField(max_length=100)
    complete = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created']

    def __str__(self):
        return self.title
