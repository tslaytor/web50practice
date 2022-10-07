from http.client import HTTPResponse
from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
import time

# Create your views here.
def index(request):
    return render(request, 'newposts/index.html')

def newposts(request, start, end):

    data = []
    for i in range(start, end + 1):
        data.append(f'This is post number {i}')

    time.sleep(1)

    return JsonResponse({'posts': data})