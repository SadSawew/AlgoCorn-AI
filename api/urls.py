from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'modules', views.CourseModuleViewSet)
router.register(r'exercises', views.ExerciseViewSet)
router.register(r'users', views.UserViewSet) # добавил роутер для User
router.register(r'results', views.ResultViewSet)
router.register(r'interactions', views.InteractionViewSet)

urlpatterns = [
    path('modules/', views.CourseModuleList.as_view(), name='module-list'),
    path('modules/<int:pk>/', views.CourseModuleDetail.as_view(), name='module-detail'),
    path('exercises/', views.ExerciseList.as_view(), name='exercise-list'),
    path('exercises/<int:pk>/', views.ExerciseDetail.as_view(), name='exercise-detail'),
    path('exercises/<int:pk>/submit/', views.ExerciseSubmit.as_view(), name='exercise-submit'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # JWT token obtain
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # JWT token refresh
    # ... other API URLs
]