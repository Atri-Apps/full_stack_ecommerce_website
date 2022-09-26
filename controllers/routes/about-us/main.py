from .atri import Atri
from fastapi import Request, Response
from atri_utils import *

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
    if at.TextBox76.onClick:
        res.headers.append("location", "/about-us")
    if at.TextBox79.onClick:
        res.headers.append("location", "/contact-us")
    if at.TextBox77.onClick:
        res.headers.append("location", "/shop")
    if at.TextBox78.onClick or at.TextBox80.onClick:
        res.headers.append("location", "/")
    pass