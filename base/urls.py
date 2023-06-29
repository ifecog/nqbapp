from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token-obtain-pair'),
    path('profile/', views.get_user_profile, name='user-profile'),
]

