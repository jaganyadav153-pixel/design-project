from django.contrib import admin
from .models import StudentProfile, QuizResponse, Prediction, Domain, Resource, Feedback


@admin.register(StudentProfile)
class StudentProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'math_marks', 'programming_marks', 'created_at')
    search_fields = ('user__username',)


@admin.register(QuizResponse)
class QuizResponseAdmin(admin.ModelAdmin):
    list_display = ('student', 'logic_score', 'data_interest')


@admin.register(Prediction)
class PredictionAdmin(admin.ModelAdmin):
    list_display = ('student', 'recommended_domain', 'confidence', 'created_at')


@admin.register(Domain)
class DomainAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(Resource)
class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title', 'domain', 'type', 'language', 'rating')
    list_filter = ('type', 'language')


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'rating', 'created_at')
