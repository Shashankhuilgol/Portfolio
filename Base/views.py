from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import messages
from Base import models
from Base.models import Contact
# Create your views here.

#def home(request):
    #return render(request,'home.html')

def contact(request):
    if request.method=="POST":
        print('post request received')
        name=request.POST.get('name')
        email=request.POST.get('email')
        number=request.POST.get('number')
        content=request.POST.get('content')
        print(name,email,number,content)

        if len(name)>1 and len(name)<30:
          pass
        else:
           messages.error(request,'Length of name the should be greater than 1 and less than 30 words.')
           return render(request,'home.html')
    
        if len(email)>1 and len(email)<30:
           pass
        else:
           messages.error(request,'Invalid email try again.')
           return render(request,'home.html')

        if len(number)>1 and len (number)<14:
           pass
        else:
           messages.error(request,'Invalid number try again.')
           return render(request,'home.html')
    
        if not content or len(content)<5:
           messages.error(request,'Content should be atleast 5 characters long.')
           return render(request,'home.html')
    
        ins=models.Contact(name=name,email=email,number=number,content=content)
        ins.save()
        messages.success(request,'Thank you for contacting me || your message have been saved')
        print('Data has been saved to database')
        return render(request,'home.html')
    return render(request,'home.html')
    



