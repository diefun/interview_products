from decimal import Decimal
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .models import Product


def serialize(product):
    return {
        "id": product.id,
        "name": product.name,
        "price": Decimal(product.price)
    }

# Create your views here.
@csrf_exempt
@require_http_methods(["GET"])
def products_details(request):
    products = Product.objects.all()

    return JsonResponse({"products": [serialize(product) for product in products]}, status=200)