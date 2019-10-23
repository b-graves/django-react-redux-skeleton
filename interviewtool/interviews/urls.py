from rest_framework import routers
from .api import InterviewViewSet

router = routers.DefaultRouter()
router.register('api/interviews', InterviewViewSet, 'interviews')

urlpatterns = router.urls