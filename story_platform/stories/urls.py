from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StoryViewSet, BranchViewSet

router = DefaultRouter()
router.register(r'stories', StoryViewSet)
router.register(r'branches', BranchViewSet)

urlpatterns = [
    path('', include(router.urls)),
]