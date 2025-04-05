from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import messages
from Base import models
from Base.models import Contact
# Below imports is done for sending the mails
from django.core.mail import send_mail
from django.core.mail.message import EmailMessage
from django.conf import settings
from django.core import mail
# Create your views here.

#def home(request):
    #return render(request,'home.html')

def contact(request):
    if request.method == "POST":
        print('POST request received')

        # Get the form values from POST data
        name = request.POST.get('name')
        email = request.POST.get('email')
        number = request.POST.get('number')
        content = request.POST.get('content')
        print(name, email, number, content)

        # Form validation
        if len(name) < 1 or len(name) > 30:
            messages.error(request, 'Name should be between 1 and 30 characters.')
            return redirect('contact')  # Redirect to avoid resubmission on refresh

        if len(email) < 1 or len(email) > 30:
            messages.error(request, 'Invalid email address. Please try again.')
            return redirect('contact')  # Redirect to avoid resubmission on refresh

        if len(number) < 1 or len(number) > 14:
            messages.error(request, 'Invalid phone number. Please try again.')
            return redirect('contact')  # Redirect to avoid resubmission on refresh

        if not content or len(content) < 5:
            messages.error(request, 'Message content should be at least 5 characters long.')
            return redirect('contact')  # Redirect to avoid resubmission on refresh

        # Save the data into the Contact model
        ins = models.Contact(name=name, email=email, number=number, content=content)
        ins.save()

        # Sending email to the admin and the user who submitted the form
        from_email = settings.EMAIL_HOST_USER
        connection = mail.get_connection()
        connection.open()

        # Email to admin (you)
        email_message_admin = mail.EmailMessage(
            f'Email from {name}',
            f'User Email: {email}\nUser Phone: {number}\n\nQUERY: {content}',
            from_email,
            ['Shashank.huilgol22@gmail.com', 'anirudh.huilgol22@gmail.com'],
            connection=connection
        )

        # Email to the user (the person who submitted the form)
        email_message_user = mail.EmailMessage(
            f'Thank you for contacting us, {name}',
            'We have received your message and will get back to you soon.',
            from_email,
            [email],
            connection=connection
        )

        # Send both emails
        connection.send_messages([email_message_admin, email_message_user])
        connection.close()

        # Success message
        messages.success(request, 'Thank you for contacting us. Your message has been sent successfully!')
        print('Data has been saved to the database')

        return render(request,'index.html')  # Redirect to the same page after success

    # Render the contact form page (GET request)
    return render(request, 'index.html')