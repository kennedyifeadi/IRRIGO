from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .models import SensorData
from .serializers import SensorDataSerializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def receive_sensor_data(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = SensorDataSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'status': 'success', 'message':"Data saved successfully"}, status=201)
        else:
            return JsonResponse(serializer.errors, status=400)
    return JsonResponse({'status': 'error', 'message':"Invalid request"}, status=400)

class SensorDataView(APIView):
    def get(self, request):
        sensor_data = SensorData.objects.all()
        serializer = SensorDataSerializer(sensor_data, many=True)
        return Response(serializer.data)
# Create your views here.
