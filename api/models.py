from django.db import models

class CourseModule(models.Model):
    course_module_id = models.PositiveSmallIntegerField("Порядковый номер темы(модуля)", primary_key=True)
    title = models.CharField(max_length=128)
    description = models.TextField("Описание")
    content = models.TextField("Теория")
    img = models.ImageField("Иллюстрации", upload_to='module_images/', blank=True, null=True)

    def __str__(self):
        return self.title

class Exercise(models.Model):
    exercise_id = models.AutoField(primary_key=True)
    topic = models.ForeignKey(CourseModule, on_delete=models.CASCADE, related_name='exercises')
    description = models.TextField()
    solution = models.TextField()  # Может быть FileField для кода
    difficulty = models.CharField(max_length=50)

    def __str__(self):
        return self.description

class User(models.Model):  # Пример модели User
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password_hash = models.CharField(max_length=128)  # Хранить хеш, не пароль!
    join_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username

class Result(models.Model):
    result_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    score = models.IntegerField()
    attempt_date = models.DateTimeField(auto_now_add=True)

class Interaction(models.Model):
    interaction_id = models.AutoField(primary_key=True)
    sender = models.ForeignKey(User, related_name='sent_messages', on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name='received_messages', on_delete=models.CASCADE)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)