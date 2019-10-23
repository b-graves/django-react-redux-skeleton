from rest_framework import serializers
from interviews.models import Interview

# Interview Serializer
class InterviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interview
        fields = '__all__'
        