from .atri import Atri
from fastapi import Request, Response
from atri_utils import *
import json

def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    at.Flex306.styles.display = 'none'
    pass

def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    at.Flex306.styles.display = 'none'
    for i in range(4):
        instance: at.__class__ = getattr(at, f'Cart_Card_{i+1}')
        instance.styles.display = 'none'

    f = open('cart.json')
    data = json.load(f)

    for i in range(min(len(data), 4)):
        instance: at.__class__ = getattr(at, f'Cart_Card_{i + 1}')
        instance.styles.display = 'flex'

        #Name
        instance: at.__class__ = getattr(at, f'Cart_Card_Name_{i + 1}')
        instance.custom.text = data[i]['name']

        #Price
        instance: at.__class__ = getattr(at, f'Cart_Card_Price_{i + 1}')
        instance.custom.text = data[i]['price']

        #Image
        instance: at.__class__ = getattr(at, f'Cart_Card_Image_{i + 1}')
        instance.custom.src = '/app-assets/' + data[i]['image']

        #Quantity
        instance: at.__class__ = getattr(at, f'Cart_Card_Quantity_{i + 1}')
        instance.custom.value = int(data[i]['quantity'])

    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    if at.Image127.onClick:
        at.Flex306.styles.display = 'none'
    if at.TextBox228.onClick or at.Image108.onClick:
        at.Flex306.styles.display = 'flex'
    pass