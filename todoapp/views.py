'''
Use ModelViewSet from django_rest_framework
'''
from rest_framework import viewsets
from .models import Todo
from .serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    # def get_queryset(self):
    #     '''
    #     This view should return a list of all todos
    #     for the currently authenticated user.
    #     '''
    #     user = self.request.user
    #     return Todo.objects.filter(user=user)
