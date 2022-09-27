from .atri import Atri
from fastapi import Request, Response
from atri_utils import *
import json


def set_data(at:Atri, max_len: int, start_indx: int):
    f = open('products.json')
    data = json.load(f)
    print("jatt")
    for i, j in enumerate(data[start_indx:min(start_indx+max_len, len(data[start_indx:]))]):
        #Price
        instance: at.Price_1.__class__ = getattr(at, f'Price_{max_len-i}')
        instance.custom.text = "$ " + j['price'] + f" USD"

        #Image
        instance: at.Prod_image_1.__class__ = getattr(at, f'Prod_image_{max_len-i}')
        instance.custom.src = '/app-assets/' + j['image']

        #Name
        instance: at.Name_1.__class__ = getattr(at, f'Name_{max_len-i}')
        instance.custom.text = j['name']
    left = max_len - len(data)
    for i in range(left):
        instance: at.Card_1.__class__ = getattr(at, f'Card_{i+1}')
        instance.styles.display = 'none'


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

    set_data(at, 6, 0)



    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    f = open('products.json')
    data = json.load(f)
    if at.Image105.onClick:
        with open('data.txt', 'r') as f_data:
            f_dt = f_data.read()
        print("jatt ", f_dt)
        if int(f_dt) == 0:
            pass
        else:
            set_data(at, 6, max(0, int(f_dt) - 6))
            f_data.write(str(max(0, int(f_dt) - 6)))
    if at.Image106.onClick:
        with open('data.txt', 'r') as f_data:
            if int(f_data.read()) > len(data):
                pass
            else:
                set_data(at, 6, min(len(data), int(f_data.read())))
                f_data.write(str(max(0, int(f_data.read()) + 6)))
    pass