'''
Serialize "Todo" model
'''
from rest_framework import serializers

from todoapp.models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        # exclude = ('user',)
        fields = '__all__'
