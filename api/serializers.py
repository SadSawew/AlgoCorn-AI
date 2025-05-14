from rest_framework import serializers
from .models import CourseModule, Exercise, User, Result, Interaction

class CourseModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseModule
        fields = ('course_module_id', 'title', 'description', 'content', 'img')

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ('exercise_id', 'topic', 'description', 'solution', 'difficulty')

class UserSerializer(serializers.ModelSerializer):  # Пример сериализатора User
    class Meta:
        model = User
        fields = ('user_id', 'username', 'email', 'join_date')

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ('result_id', 'user', 'exercise', 'score', 'attempt_date')

class InteractionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interaction
        fields = ('interaction_id', 'sender', 'receiver', 'message', 'timestamp')