from django.urls import path
from .views import products_details

urlpatterns = [
    path('api/products/', products_details, name='products_details'),
]