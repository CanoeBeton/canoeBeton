import random
import string
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


def generate_random_string(length: int) -> str:
    symbols = string.ascii_letters + string.digits
    return ''.join(random.choice(symbols) for _ in range(length))




def send_email_fr(content, subject,  email):
    message = Mail(
        from_email='marcanthony.girard.protic@gmail.com',
        to_emails=email,
        subject=subject,
        html_content=content)
    sg = SendGridAPIClient("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")
    response = sg.send(message)




