from .atri import Atri
from fastapi import Request, Response
from atri_utils import *

from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    pass

def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    if at.Button5.onClick:
        name = at.Input4.custom.value.strip()
        email = at.Input5.custom.value.strip()
        user_msg = at.Input6.custom.value.strip()
        message = Mail(
            from_email='sanskarg348@gmail.com',
            to_emails='19803023@mail.jiit.ac.in',
            subject='Sending with Twilio SendGrid is Fun',
            html_content=f'Hey Person Name this is {name} my email is {email} and my query for you is {user_msg}')
        try:

            sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
            print(message)
            response = sg.send(message,)
            # at.Flex491.styles.display = 'flex'
        except Exception as e:
            print(name, email, user_msg)
            print(e)
    pass