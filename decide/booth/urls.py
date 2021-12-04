from django.urls import path
from .views import BoothView
from .views import PruebaView


urlpatterns = [
    path('<int:voting_id>/', BoothView.as_view()),
    path('prueba/', PruebaView.as_view(), name='prueba')
]
