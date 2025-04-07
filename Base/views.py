from django.shortcuts import render, redirect
from django.contrib import messages
from Base.models import Contact
from django.core.mail.message import EmailMessage
from django.conf import settings
from django.core import mail

def contact(request):
    if request.method == "POST":
        try:
            print('POST request received')

            # Get data from POST
            name = request.POST.get('name')
            email = request.POST.get('email')
            number = request.POST.get('number')
            content = request.POST.get('content')
            print(name, email, number, content)

            # Form validation
            if len(name) < 1 or len(name) > 30:
                messages.error(request, 'Name should be between 1 and 30 characters.')
                return redirect('contact')

            if len(email) < 1 or len(email) > 30:
                messages.error(request, 'Invalid email address. Please try again.')
                return redirect('contact')

            if len(number) < 1 or len(number) > 14:
                messages.error(request, 'Invalid phone number. Please try again.')
                return redirect('contact')

            if not content or len(content) < 5:
                messages.error(request, 'Message content should be at least 5 characters long.')
                return redirect('contact')

            # Save to DB
            ins = Contact(name=name, email=email, number=number, content=content)
            ins.save()

            # Sending emails
            from_email = settings.EMAIL_HOST_USER
            connection = mail.get_connection()
            connection.open()

            email_message_admin = EmailMessage(
                f'Email from {name}',
                f'User Email: {email}\nUser Phone: {number}\n\nQUERY: {content}',
                from_email,
                ['Shashank.huilgol22@gmail.com', 'anirudh.huilgol22@gmail.com'],
                connection=connection
            )

            email_message_user = EmailMessage(
                f'Thank you for contacting us, {name}',
                'We have received your message and will get back to you soon.',
                from_email,
                [email],
                connection=connection
            )

            connection.send_messages([email_message_admin, email_message_user])
            connection.close()

            messages.success(request, 'Thank you for contacting us. Your message has been sent successfully!')
            print('Data has been saved to the database')

            return render(request, 'index.html')

        except Exception as e:
            print(f"Internal Server Error: {e}")
            return render(request, '500.html', status=500)

    return render(request, 'index.html')


# ==========================
# Custom error page handlers
# ==========================

def custom_404(request, exception):
    return render(request, '404.html', status=404)

def custom_500(request):
    return render(request, '500.html', status=500)


def custom_400(request, exception):
    return render(request, '400.html', status=400)
    