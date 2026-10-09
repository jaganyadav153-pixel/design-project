"""
backend/api/models.py - Django Models for GuidanceAI
"""
from django.db import models
from django.contrib.auth.models import User

class StudentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    math_marks = models.IntegerField()
    physics_marks = models.IntegerField()
    programming_marks = models.IntegerField()
    english_marks = models.IntegerField()
    learning_style = models.CharField(max_length=20) # Visual/Auditory/Kinesthetic/Reading
    personality = models.CharField(max_length=20) # Analytical/Creative/Practical/Social
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self): return f"{self.user.username} - {self.programming_marks}"

class QuizResponse(models.Model):
    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE)
    logic_score = models.IntegerField()
    math_aptitude = models.IntegerField()
    creativity = models.IntegerField()
    security_interest = models.IntegerField()
    cloud_interest = models.IntegerField()
    data_interest = models.IntegerField()
    os_interest = models.IntegerField()
    coding_interest = models.IntegerField()
    trend_interest = models.IntegerField()
    social_interest = models.IntegerField()

class Prediction(models.Model):
    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE)
    recommended_domain = models.CharField(max_length=30) # AI/ML/Cybersecurity/Cloud/DBMS/OS
    confidence = models.FloatField()
    top3 = models.JSONField() # [{"domain":"AI","score":82}, ...]
    created_at = models.DateTimeField(auto_now_add=True)

class Domain(models.Model):
    name = models.CharField(max_length=30, unique=True)
    description = models.TextField()
    skills = models.JSONField()
    careers = models.JSONField()
    roadmap = models.JSONField() # 4 phases

class Resource(models.Model):
    title = models.CharField(max_length=200)
    domain = models.ForeignKey(Domain, on_delete=models.CASCADE)
    type = models.CharField(max_length=20) # NPTEL/Coursera/YouTube
    language = models.CharField(max_length=20)
    difficulty = models.CharField(max_length=20)
    url = models.URLField()
    rating = models.FloatField(default=4.7)

class Feedback(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=20)
    text = models.TextField()
    rating = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
