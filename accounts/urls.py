from django.urls import path
from .import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path("profile/", views.profile, name='profile'),
    path('api/auth/', views.CustomAuthToken.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)
