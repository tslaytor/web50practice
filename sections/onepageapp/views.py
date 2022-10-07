from http.client import HTTPResponse
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'sections/index.html')


sections = ["But wherefore do not you a mightier way Make war upon this bloody tyrant Time? And fortify your self in your decay With means more blessed than my barren rhyme? Now stand you on the top of happy hours, And many maiden gardens yet unset, With virtuous wish would bear you living flowers, Much liker than your painted counterfeit: So should the lines of life that life repair Which this (Time's pencil) or my pupil pen Neither in inward worth nor outward fair", 'this is section 2', 'this is section 3',]

def showsection(request, sectionNumber):
    return HttpResponse(sections[sectionNumber - 1])


