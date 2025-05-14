from rest_framework import generics, viewsets
from .models import CourseModule, Exercise, User, Result, Interaction
from .serializers import CourseModuleSerializer, ExerciseSerializer, UserSerializer, ResultSerializer, InteractionSerializer
from rest_framework.permissions import AllowAny #added

class CourseModuleViewSet(viewsets.ModelViewSet):
    queryset = CourseModule.objects.all()
    serializer_class = CourseModuleSerializer

class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

class UserViewSet(viewsets.ModelViewSet): # добавил вьюсет для User
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny] #added

class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer

class InteractionViewSet(viewsets.ModelViewSet):
    queryset = Interaction.objects.all()
    serializer_class = InteractionSerializer


# Можно использовать generics.*APIView для более тонкой настройки
# class CourseModuleList(generics.ListCreateAPIView):
#     queryset = CourseModule.objects.all()
#     serializer_class = CourseModuleSerializer
#
# class CourseModuleDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = CourseModule.objects.all()
#     serializer_class = CourseModuleSerializer