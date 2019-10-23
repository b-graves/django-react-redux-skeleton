from interviews.models import Interview
from rest_framework import viewsets, permissions
from .serializers import InterviewSerializer

# Interview Viewset
class InterviewViewSet(viewsets.ModelViewSet):
    queryset = Interview.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = InterviewSerializer

    def get_queryset(self):
        return self.request.user.interviews.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
