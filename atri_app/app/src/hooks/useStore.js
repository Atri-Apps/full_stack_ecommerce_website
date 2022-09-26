import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex1": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "15px",
        "paddingBottom": "15px",
        "position": "sticky",
        "top": 1,
        "zIndex": 100,
        "backgroundColor": "#ffffff",
        "float": "none",
        "clear": "none",
        "bottom": null
      },
      "callbacks": {}
    },
    "Flex2": {
      "styles": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex3": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "50px",
        "paddingRight": "100px"
      },
      "callbacks": {}
    },
    "TextBox1": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "30px",
        "paddingLeft": "150px",
        "cursor": "pointer"
      },
      "custom": {
        "text": "Pompeo"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox2": {
      "styles": {},
      "custom": {
        "text": "Cart"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox4": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox5": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox6": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex4": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "cursor": "pointer",
        "paddingLeft": "10px",
        "borderLeftStyle": "solid",
        "borderLeftWidth": "2px",
        "borderLeftColor": "#a4a4a4"
      },
      "callbacks": {}
    },
    "Image1": {
      "styles": {
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/cart-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex5": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "paddingTop": "140px",
        "paddingLeft": "",
        "backgroundColor": "#FBFBFB",
        "paddingBottom": "30px"
      },
      "callbacks": {}
    },
    "Flex6": {
      "styles": {
        "display": "flex",
        "alignItems": "stretch",
        "flexDirection": "column",
        "width": "50%",
        "paddingLeft": "150px",
        "boxSizing": "border-box",
        "rowGap": "20px",
        "position": "static"
      },
      "callbacks": {}
    },
    "Flex7": {
      "styles": {
        "display": "flex",
        "alignItems": "stretch",
        "width": "50%",
        "position": "relative",
        "right": 40
      },
      "callbacks": {}
    },
    "Image2": {
      "styles": {
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1111.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox7": {
      "styles": {
        "backgroundColor": "",
        "color": "#D77474"
      },
      "custom": {
        "text": "POMPEO PORTERRY"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox8": {
      "styles": {
        "paddingLeft": "",
        "width": "100%",
        "fontFamily": "Open Sans",
        "fontSize": "12px",
        "color": "#666666",
        "paddingTop": "10px"
      },
      "custom": {
        "text": "Unique & modern pottery made by our master in porcelain & stones"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "styles": {},
      "custom": {
        "text": "Unique Porcelain"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button1": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#AC1314",
        "paddingTop": "15px",
        "paddingLeft": "15px",
        "paddingBottom": "15px",
        "paddingRight": "15px",
        "fontSize": "13px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 300,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "170px",
        "fontFamily": "Open Sans"
      },
      "custom": {
        "text": "SHOP COLLECTION"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "styles": {},
      "custom": {
        "text": "Stone Collection"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex8": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "px",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "46px",
        "paddingBottom": "20px"
      },
      "callbacks": {}
    },
    "TextBox11": {
      "styles": {
        "color": "#D77474"
      },
      "custom": {
        "text": "PRODUCT CATEGORIES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "30px"
      },
      "custom": {
        "text": "Porcelain & Pottery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex10": {
      "styles": {
        "display": "flex",
        "marginLeft": "",
        "paddingLeft": "",
        "paddingRight": "",
        "columnGap": "90px"
      },
      "callbacks": {}
    },
    "Flex11": {
      "styles": {
        "display": "flex",
        "borderRadius": "50%",
        "width": "200px",
        "height": "200px",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "#E45611"
      },
      "callbacks": {}
    },
    "Flex12": {
      "styles": {
        "display": "flex",
        "borderRadius": "50%",
        "width": "200px",
        "height": "200px",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "#D8AA61"
      },
      "callbacks": {}
    },
    "Flex13": {
      "styles": {
        "display": "flex",
        "borderRadius": "50%",
        "width": "200px",
        "height": "200px",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "#9A0F0F"
      },
      "callbacks": {}
    },
    "Flex14": {
      "styles": {
        "display": "flex",
        "width": "160px",
        "height": "160px",
        "borderRadius": "50%",
        "backgroundColor": "#E3B366",
        "zIndex": 2,
        "justifyContent": "center",
        "alignItems": "center",
        "flexDirection": "column",
        "rowGap": "7px"
      },
      "callbacks": {}
    },
    "Flex15": {
      "styles": {
        "display": "flex",
        "width": "160px",
        "height": "160px",
        "borderRadius": "50%",
        "backgroundColor": "#F05B10",
        "zIndex": 2,
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "column",
        "rowGap": "px"
      },
      "callbacks": {}
    },
    "Flex16": {
      "styles": {
        "display": "flex",
        "width": "160px",
        "height": "160px",
        "borderRadius": "50%",
        "backgroundColor": "#A1100F",
        "zIndex": 2,
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "column",
        "rowGap": "9px"
      },
      "callbacks": {}
    },
    "Image3": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/22222.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/33333.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "styles": {
        "width": "72px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/44444.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "styles": {
        "fontFamily": "Open Sans",
        "color": "#ffffff"
      },
      "custom": {
        "text": "VASES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "styles": {
        "fontFamily": "Open Sans",
        "color": "#ffffff"
      },
      "custom": {
        "text": "VASES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "styles": {
        "fontFamily": "Open Sans",
        "color": "#ffffff"
      },
      "custom": {
        "text": "VASES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox16": {
      "styles": {
        "fontFamily": "Open Sans",
        "color": "#ffffff"
      },
      "custom": {
        "text": "VASES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "styles": {
        "width": "72px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/44444.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "styles": {
        "fontFamily": "Open Sans",
        "color": "#ffffff"
      },
      "custom": {
        "text": "VASES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/22222.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "styles": {
        "fontFamily": "Open Sans",
        "color": "#ffffff"
      },
      "custom": {
        "text": "VASES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/33333.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex19": {
      "styles": {
        "display": "flex",
        "width": "160px",
        "height": "160px",
        "borderRadius": "50%",
        "backgroundColor": "#A1100F",
        "zIndex": 2,
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "column",
        "rowGap": "9px"
      },
      "callbacks": {}
    },
    "Flex20": {
      "styles": {
        "display": "flex",
        "width": "160px",
        "height": "160px",
        "borderRadius": "50%",
        "backgroundColor": "#E3B366",
        "zIndex": 2,
        "justifyContent": "center",
        "alignItems": "center",
        "flexDirection": "column",
        "rowGap": "7px"
      },
      "callbacks": {}
    },
    "Flex21": {
      "styles": {
        "display": "flex",
        "width": "160px",
        "height": "160px",
        "borderRadius": "50%",
        "backgroundColor": "#F05B10",
        "zIndex": 2,
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "column",
        "rowGap": "px"
      },
      "callbacks": {}
    },
    "Flex22": {
      "styles": {
        "display": "flex",
        "borderRadius": "50%",
        "width": "220px",
        "height": "220px",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "#9A0F0F"
      },
      "callbacks": {}
    },
    "Flex23": {
      "styles": {
        "display": "flex",
        "borderRadius": "50%",
        "width": "220px",
        "height": "220px",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "#D8AA61"
      },
      "callbacks": {}
    },
    "Flex24": {
      "styles": {
        "display": "flex",
        "borderRadius": "50%",
        "width": "220px",
        "height": "220px",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "#E45611"
      },
      "callbacks": {}
    },
    "Flex25": {
      "styles": {
        "display": "flex",
        "marginLeft": "",
        "paddingLeft": "",
        "paddingRight": "",
        "columnGap": "100px",
        "paddingTop": "20px"
      },
      "callbacks": {}
    },
    "TextBox19": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "30px"
      },
      "custom": {
        "text": "Porcelain & Pottery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "styles": {
        "color": "#D77474"
      },
      "custom": {
        "text": "PRODUCT CATEGORIES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex26": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "paddingTop": "140px",
        "rowGap": "30px",
        "paddingBottom": "",
        "marginBottom": "",
        "paddingLeft": ""
      },
      "callbacks": {}
    },
    "Flex27": {
      "styles": {
        "display": "flex",
        "fontFamily": "Open Sans",
        "paddingLeft": "150px",
        "boxSizing": "border-box",
        "paddingRight": "150px",
        "paddingTop": "80px",
        "paddingBottom": ""
      },
      "callbacks": {}
    },
    "Flex28": {
      "styles": {
        "display": "flex",
        "width": "50%",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "justifyContent": "center",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex29": {
      "styles": {
        "display": "flex",
        "width": "50%",
        "flexDirection": "column",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox21": {
      "styles": {
        "width": "80%",
        "fontSize": "14px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox22": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "20px",
        "width": "60%"
      },
      "custom": {
        "text": "Hand Grafted Pottery since 1990"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "20px",
        "width": "60%"
      },
      "custom": {
        "text": "We Provide Premium Pottery Produts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "styles": {
        "fontSize": "14px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex30": {
      "styles": {
        "display": "flex",
        "marginBottom": "",
        "alignItems": "center",
        "justifyContent": "space-around",
        "paddingLeft": "150px",
        "paddingTop": "300px",
        "paddingRight": "150px"
      },
      "callbacks": {}
    },
    "Flex31": {
      "styles": {
        "display": "flex",
        "width": "50%",
        "alignItems": "center",
        "justifyContent": "center"
      },
      "callbacks": {}
    },
    "Flex33": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F5F5F5",
        "width": "450px",
        "height": "200px"
      },
      "callbacks": {}
    },
    "Image10": {
      "styles": {
        "position": "relative",
        "height": "450px",
        "right": null,
        "zIndex": 2,
        "left": 100,
        "bottom": 100
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5555.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex35": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox25": {
      "styles": {
        "paddingLeft": "80px",
        "paddingRight": "80px",
        "backgroundColor": "",
        "color": "#838383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "17px"
      },
      "custom": {
        "text": "Gold & Black Pottery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "styles": {
        "position": "relative",
        "height": "300px",
        "right": null,
        "zIndex": 2,
        "left": 100,
        "bottom": 40
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6666.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "17px"
      },
      "custom": {
        "text": "Orange Ceramic"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox28": {
      "styles": {
        "paddingLeft": "80px",
        "paddingRight": "80px",
        "backgroundColor": "",
        "color": "#838383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex36": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F5F5F5",
        "width": "450px",
        "height": "200px"
      },
      "callbacks": {}
    },
    "Flex37": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex38": {
      "styles": {
        "display": "flex",
        "width": "50%",
        "alignItems": "center",
        "justifyContent": "center"
      },
      "callbacks": {}
    },
    "Flex39": {
      "styles": {
        "display": "flex",
        "marginBottom": "",
        "alignItems": "center",
        "justifyContent": "space-around",
        "paddingLeft": "150px",
        "paddingTop": "300px",
        "paddingRight": "150px",
        "paddingBottom": "200px"
      },
      "callbacks": {}
    },
    "Flex40": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "column",
        "rowGap": "30px",
        "marginBottom": "",
        "paddingLeft": "150px",
        "paddingRight": "150px",
        "boxSizing": "border-box",
        "paddingBottom": ""
      },
      "callbacks": {}
    },
    "TextBox29": {
      "styles": {
        "color": "#D77474"
      },
      "custom": {
        "text": "OUR ONLINE STORE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox30": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "28px"
      },
      "custom": {
        "text": "POTTERY COLLECTION"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex45": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "30px",
        "paddingBottom": ""
      },
      "callbacks": {}
    },
    "Flex46": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex47": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex48": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex49": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingRight": "",
        "flexDirection": "row",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "Image13": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/11.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "styles": {},
      "custom": {
        "text": "Decor Plate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex55": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2",
        "width": "100%"
      },
      "callbacks": {}
    },
    "Image16": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/22.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex58": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "backgroundColor": "#F2F2F2",
        "width": "100%",
        "height": "100%"
      },
      "callbacks": {}
    },
    "Image17": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/33.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex59": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2",
        "width": "100%"
      },
      "callbacks": {}
    },
    "Image20": {
      "styles": {
        "height": "200px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/44.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex62": {
      "styles": {
        "display": "flex",
        "width": "100%",
        "height": "100%"
      },
      "callbacks": {}
    },
    "Image22": {
      "styles": {
        "height": "200px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/55.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex64": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2"
      },
      "callbacks": {}
    },
    "Image24": {
      "styles": {
        "height": "200px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/66.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex66": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2"
      },
      "callbacks": {}
    },
    "TextBox37": {
      "styles": {},
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "styles": {},
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox39": {
      "styles": {},
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/55.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/44.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/66.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex67": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "backgroundColor": "#F2F2F2",
        "width": "100%",
        "height": "100%"
      },
      "callbacks": {}
    },
    "Flex68": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2",
        "width": "100%"
      },
      "callbacks": {}
    },
    "TextBox41": {
      "styles": {},
      "custom": {
        "text": "Orange Ceramic"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "styles": {},
      "custom": {
        "text": "Square Pottery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex69": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2",
        "width": "100%"
      },
      "callbacks": {}
    },
    "Flex70": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex71": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex72": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex73": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingRight": "",
        "flexDirection": "row",
        "columnGap": "20px",
        "paddingTop": "",
        "paddingBottom": "50px"
      },
      "callbacks": {}
    },
    "TextBox43": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox44": {
      "styles": {},
      "custom": {
        "text": "Mint Pottery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "styles": {},
      "custom": {
        "text": "Set Of Potterys"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "styles": {},
      "custom": {
        "text": "Dark Bowl"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button2": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#AC1314",
        "paddingTop": "15px",
        "paddingLeft": "15px",
        "paddingBottom": "15px",
        "paddingRight": "15px",
        "fontSize": "15px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 300,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Open Sans",
        "width": "200px",
        "alignSelf": "center"
      },
      "custom": {
        "text": "View All Products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex74": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingTop": "150px",
        "paddingBottom": ""
      },
      "callbacks": {}
    },
    "Flex75": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "5px",
        "width": "40%",
        "backgroundColor": "#FBF9F8",
        "paddingLeft": "150px",
        "justifyContent": "center",
        "paddingTop": "30px",
        "paddingBottom": "30px"
      },
      "callbacks": {}
    },
    "Flex76": {
      "styles": {
        "display": "flex",
        "flexGrow": 1
      },
      "callbacks": {}
    },
    "TextBox61": {
      "styles": {
        "width": "100%",
        "paddingTop": "10px",
        "paddingBottom": "20px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "styles": {
        "color": "#D77474"
      },
      "custom": {
        "text": "POMPEO POTTERY"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "32px"
      },
      "custom": {
        "text": "Ready to start shopping?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button3": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#AC1314",
        "paddingTop": "15px",
        "paddingLeft": "15px",
        "paddingBottom": "15px",
        "paddingRight": "15px",
        "fontSize": "13px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 300,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Open Sans",
        "width": "180px"
      },
      "custom": {
        "text": "NEW COLLECTION"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "styles": {
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-09-23%20at%2012.29.41%20PM.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex77": {
      "styles": {
        "display": "flex",
        "paddingTop": "100px",
        "alignItems": "center",
        "justifyContent": "flex-start",
        "flexDirection": "column",
        "rowGap": "30px",
        "paddingBottom": "150px"
      },
      "callbacks": {}
    },
    "Image29": {
      "styles": {
        "width": "100px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-sent-50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "32px"
      },
      "custom": {
        "text": "Latest news & New updates"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "styles": {
        "color": "#D77474"
      },
      "custom": {
        "text": "LATEST NEWS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex78": {
      "styles": {
        "display": "flex",
        "paddingRight": "",
        "columnGap": "5px"
      },
      "callbacks": {}
    },
    "Flex79": {
      "styles": {
        "display": "flex",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Checkbox1": {
      "styles": {},
      "custom": {
        "checked": true
      },
      "callbacks": {}
    },
    "TextBox66": {
      "styles": {},
      "custom": {
        "text": "Sign up for our newsletter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex81": {
      "styles": {
        "display": "flex",
        "justifyContent": "flex-start",
        "alignItems": "center",
        "backgroundColor": "#FBFBFB",
        "width": "400px",
        "paddingLeft": "20px"
      },
      "callbacks": {}
    },
    "Image31": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-mail-24.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input3": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#FBFBFB",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#d9d9d9",
        "borderRadius": "2px",
        "width": "80%"
      },
      "custom": {
        "value": "",
        "placeholder": "Enter your email"
      },
      "callbacks": {}
    },
    "Button4": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#000000",
        "paddingTop": "15px",
        "paddingLeft": "25px",
        "paddingBottom": "15px",
        "paddingRight": "25px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none"
      },
      "custom": {
        "text": "SUBSCRIBE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex82": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#FBFBFB",
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "column",
        "paddingTop": "100px",
        "rowGap": "20px",
        "paddingLeft": "50px",
        "paddingRight": "50px",
        "paddingBottom": "90px"
      },
      "callbacks": {}
    },
    "TextBox67": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "30px",
        "paddingLeft": ""
      },
      "custom": {
        "text": "Pompeo"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "styles": {
        "width": "33%"
      },
      "custom": {
        "text": "I have always striven to fix beauty in wood, stone, glass or pottery, that has been my creed."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex83": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingRight": "",
        "justifyContent": "space-between",
        "columnGap": "190px",
        "alignItems": "center",
        "paddingTop": "30px"
      },
      "callbacks": {}
    },
    "Flex84": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "7px"
      },
      "callbacks": {}
    },
    "Flex85": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "rowGap": "7px"
      },
      "callbacks": {}
    },
    "Flex86": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "7px"
      },
      "callbacks": {}
    },
    "Image32": {
      "styles": {
        "width": "50px",
        "height": "50px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-mail-24.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox69": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "EMAIL"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox70": {
      "styles": {
        "paddingTop": "10px"
      },
      "custom": {
        "text": "pompeopotery@gmail.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image33": {
      "styles": {
        "width": "50px",
        "height": "50px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-address-100.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox71": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "FIND"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox72": {
      "styles": {
        "width": "80%",
        "alignSelf": "auto",
        "textAlign": "center",
        "paddingTop": "10px"
      },
      "custom": {
        "text": "Central Park, Manhattan New York, 1101"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image34": {
      "styles": {
        "width": "50px",
        "height": "50px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-phone-80.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox73": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "CALL"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox74": {
      "styles": {
        "paddingTop": "10px"
      },
      "custom": {
        "text": "+1 292 345 678"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "about-us": {
    "Image35": {
      "styles": {
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/cart-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "styles": {},
      "custom": {
        "text": "Cart"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex87": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "cursor": "pointer",
        "paddingLeft": "10px",
        "borderLeftWidth": "2px",
        "borderLeftStyle": "solid",
        "borderLeftColor": "#a4a4a4"
      },
      "callbacks": {}
    },
    "TextBox76": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox78": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox79": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox80": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "30px",
        "paddingLeft": "150px",
        "cursor": "pointer"
      },
      "custom": {
        "text": "Pompeo"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex88": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "50px",
        "paddingRight": "100px"
      },
      "callbacks": {}
    },
    "Flex89": {
      "styles": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex90": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "15px",
        "paddingBottom": "15px",
        "position": "sticky"
      },
      "callbacks": {}
    },
    "Flex91": {
      "styles": {
        "display": "flex",
        "backgroundImage": "url(\"/app-assets/nordwood-themes-wvUs06Rtu5E-unsplash%20(1).jpg\")",
        "backgroundRepeat": "repeat-x",
        "height": "60%",
        "backgroundPositionX": "250px",
        "backgroundColor": "#NaNNaNNaN1a",
        "backgroundOrigin": "border-box",
        "backgroundAttachment": "scroll",
        "backgroundClip": "content-box",
        "WebkitBackgroundClip": "content-box",
        "backgroundPositionY": "-200px"
      },
      "callbacks": {}
    },
    "Flex92": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "justifyContent": "center",
        "paddingLeft": "150px",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "TextBox81": {
      "styles": {
        "color": "#ffffff",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "32px"
      },
      "custom": {
        "text": "About Us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox83": {
      "styles": {
        "color": "#ffffff",
        "width": "400px"
      },
      "custom": {
        "text": "The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image36": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/33333.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox84": {
      "styles": {
        "fontFamily": "Open Sans",
        "color": "#ffffff"
      },
      "custom": {
        "text": "VASES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image37": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/22222.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox85": {
      "styles": {
        "fontFamily": "Open Sans",
        "color": "#ffffff"
      },
      "custom": {
        "text": "VASES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image38": {
      "styles": {
        "width": "72px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/44444.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox86": {
      "styles": {
        "fontFamily": "Open Sans",
        "color": "#ffffff"
      },
      "custom": {
        "text": "VASES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex93": {
      "styles": {
        "display": "flex",
        "width": "160px",
        "height": "160px",
        "borderRadius": "50%",
        "backgroundColor": "#F05B10",
        "zIndex": 2,
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "column",
        "rowGap": "px"
      },
      "callbacks": {}
    },
    "Flex94": {
      "styles": {
        "display": "flex",
        "width": "160px",
        "height": "160px",
        "borderRadius": "50%",
        "backgroundColor": "#E3B366",
        "zIndex": 2,
        "justifyContent": "center",
        "alignItems": "center",
        "flexDirection": "column",
        "rowGap": "7px"
      },
      "callbacks": {}
    },
    "Flex95": {
      "styles": {
        "display": "flex",
        "width": "160px",
        "height": "160px",
        "borderRadius": "50%",
        "backgroundColor": "#A1100F",
        "zIndex": 2,
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "column",
        "rowGap": "9px"
      },
      "callbacks": {}
    },
    "Flex96": {
      "styles": {
        "display": "flex",
        "borderRadius": "50%",
        "width": "220px",
        "height": "220px",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "#E45611"
      },
      "callbacks": {}
    },
    "Flex97": {
      "styles": {
        "display": "flex",
        "borderRadius": "50%",
        "width": "220px",
        "height": "220px",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "#D8AA61"
      },
      "callbacks": {}
    },
    "Flex98": {
      "styles": {
        "display": "flex",
        "borderRadius": "50%",
        "width": "220px",
        "height": "220px",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "#9A0F0F"
      },
      "callbacks": {}
    },
    "TextBox87": {
      "styles": {
        "color": "#D77474"
      },
      "custom": {
        "text": "PRODUCT CATEGORIES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox88": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "30px"
      },
      "custom": {
        "text": "Porcelain & Pottery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex99": {
      "styles": {
        "display": "flex",
        "marginLeft": "",
        "paddingLeft": "",
        "paddingRight": "",
        "columnGap": "100px",
        "paddingTop": "20px"
      },
      "callbacks": {}
    },
    "Flex100": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "paddingTop": "140px",
        "rowGap": "30px",
        "paddingBottom": "",
        "marginBottom": "",
        "paddingLeft": ""
      },
      "callbacks": {}
    },
    "TextBox89": {
      "styles": {
        "fontSize": "14px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox90": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "20px",
        "width": "60%"
      },
      "custom": {
        "text": "We Provide Premium Pottery Produts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox91": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "20px",
        "width": "60%"
      },
      "custom": {
        "text": "Hand Grafted Pottery since 1990"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox92": {
      "styles": {
        "width": "80%",
        "fontSize": "14px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex101": {
      "styles": {
        "display": "flex",
        "width": "50%",
        "flexDirection": "column",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex102": {
      "styles": {
        "display": "flex",
        "width": "50%",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "justifyContent": "center",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex103": {
      "styles": {
        "display": "flex",
        "fontFamily": "Open Sans",
        "paddingLeft": "150px",
        "boxSizing": "border-box",
        "paddingRight": "150px",
        "paddingTop": "80px",
        "paddingBottom": "70px"
      },
      "callbacks": {}
    },
    "Flex104": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F8F8F8",
        "flexDirection": "column",
        "alignItems": "center",
        "paddingTop": "150px",
        "rowGap": "20px",
        "paddingBottom": "100px"
      },
      "callbacks": {}
    },
    "TextBox93": {
      "styles": {
        "color": "#D77474"
      },
      "custom": {
        "text": "OUR CREW"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox94": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "30px"
      },
      "custom": {
        "text": "Porcelain & Pottery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex105": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "justifyContent": "flex-start",
        "alignItems": "center",
        "columnGap": "30px"
      },
      "callbacks": {}
    },
    "Flex108": {
      "styles": {
        "display": "flex",
        "paddingBottom": "50px",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "20px",
        "paddingLeft": "60px",
        "paddingRight": "60px",
        "backgroundColor": "#ffffff",
        "paddingTop": "50px"
      },
      "callbacks": {}
    },
    "TextBox95": {
      "styles": {},
      "custom": {
        "text": "Maria Monroy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox96": {
      "styles": {
        "color": "#8d8989",
        "fontSize": "12px"
      },
      "custom": {
        "text": "SENIOR DESIGNER"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox97": {
      "styles": {
        "width": "150px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  enim in eros elementum"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex110": {
      "styles": {
        "display": "flex",
        "columnGap": "8px"
      },
      "callbacks": {}
    },
    "Image39": {
      "styles": {
        "width": "14px",
        "height": "14px",
        "borderRadius": "1px",
        "borderStyle": "solid",
        "borderColor": "#c9c8c8",
        "paddingTop": "2px",
        "paddingLeft": "2px",
        "paddingBottom": "2px",
        "paddingRight": "2px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/google-plus-logo-symbol-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image40": {
      "styles": {
        "width": "14px",
        "height": "14px",
        "borderRadius": "1px",
        "borderStyle": "solid",
        "borderColor": "#c9c8c8",
        "paddingLeft": "2px",
        "paddingTop": "2px",
        "paddingBottom": "2px",
        "paddingRight": "2px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image41": {
      "styles": {
        "width": "14px",
        "height": "14px",
        "borderRadius": "1px",
        "borderStyle": "solid",
        "borderColor": "#c9c8c8",
        "paddingTop": "2px",
        "paddingLeft": "2px",
        "paddingBottom": "2px",
        "paddingRight": "2px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook-logo-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox98": {
      "styles": {
        "width": "150px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  enim in eros elementum"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox99": {
      "styles": {
        "color": "#8d8989",
        "fontSize": "12px"
      },
      "custom": {
        "text": "SENIOR DESIGNER"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox100": {
      "styles": {},
      "custom": {
        "text": "Maria Monroy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex114": {
      "styles": {
        "display": "flex",
        "paddingBottom": "50px",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "20px",
        "paddingLeft": "60px",
        "paddingRight": "60px",
        "backgroundColor": "#ffffff",
        "paddingTop": "50px"
      },
      "callbacks": {}
    },
    "TextBox101": {
      "styles": {
        "width": "150px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  enim in eros elementum"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox102": {
      "styles": {
        "color": "#8d8989",
        "fontSize": "12px"
      },
      "custom": {
        "text": "SENIOR DESIGNER"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "styles": {},
      "custom": {
        "text": "Maria Monroy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex117": {
      "styles": {
        "display": "flex",
        "paddingBottom": "50px",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "20px",
        "paddingLeft": "60px",
        "paddingRight": "60px",
        "backgroundColor": "#ffffff",
        "paddingTop": "50px"
      },
      "callbacks": {}
    },
    "Image48": {
      "styles": {
        "borderRadius": "50%",
        "width": "100px",
        "height": "100px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image49": {
      "styles": {
        "borderRadius": "50%",
        "width": "100px",
        "height": "100px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/elizeu-dias-2EGNqazbAMk-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image50": {
      "styles": {
        "borderRadius": "50%",
        "width": "100px",
        "height": "100px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image51": {
      "styles": {
        "width": "14px",
        "height": "14px",
        "borderRadius": "1px",
        "borderStyle": "solid",
        "borderColor": "#c9c8c8",
        "paddingTop": "2px",
        "paddingLeft": "2px",
        "paddingBottom": "2px",
        "paddingRight": "2px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook-logo-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image52": {
      "styles": {
        "width": "14px",
        "height": "14px",
        "borderRadius": "1px",
        "borderStyle": "solid",
        "borderColor": "#c9c8c8",
        "paddingLeft": "2px",
        "paddingTop": "2px",
        "paddingBottom": "2px",
        "paddingRight": "2px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image53": {
      "styles": {
        "width": "14px",
        "height": "14px",
        "borderRadius": "1px",
        "borderStyle": "solid",
        "borderColor": "#c9c8c8",
        "paddingTop": "2px",
        "paddingLeft": "2px",
        "paddingBottom": "2px",
        "paddingRight": "2px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/google-plus-logo-symbol-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex118": {
      "styles": {
        "display": "flex",
        "columnGap": "8px"
      },
      "callbacks": {}
    },
    "Image54": {
      "styles": {
        "width": "14px",
        "height": "14px",
        "borderRadius": "1px",
        "borderStyle": "solid",
        "borderColor": "#c9c8c8",
        "paddingTop": "2px",
        "paddingLeft": "2px",
        "paddingBottom": "2px",
        "paddingRight": "2px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook-logo-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image55": {
      "styles": {
        "width": "14px",
        "height": "14px",
        "borderRadius": "1px",
        "borderStyle": "solid",
        "borderColor": "#c9c8c8",
        "paddingLeft": "2px",
        "paddingTop": "2px",
        "paddingBottom": "2px",
        "paddingRight": "2px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image56": {
      "styles": {
        "width": "14px",
        "height": "14px",
        "borderRadius": "1px",
        "borderStyle": "solid",
        "borderColor": "#c9c8c8",
        "paddingTop": "2px",
        "paddingLeft": "2px",
        "paddingBottom": "2px",
        "paddingRight": "2px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/google-plus-logo-symbol-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex119": {
      "styles": {
        "display": "flex",
        "columnGap": "8px"
      },
      "callbacks": {}
    },
    "Image63": {
      "styles": {
        "position": "relative",
        "height": "450px",
        "right": 130,
        "zIndex": 2,
        "left": null,
        "bottom": 100
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5555.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "17px"
      },
      "custom": {
        "text": "Gold & Black Pottery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox109": {
      "styles": {
        "paddingLeft": "80px",
        "paddingRight": "80px",
        "backgroundColor": "",
        "color": "#838383"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex128": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F5F5F5",
        "width": "450px",
        "height": "200px"
      },
      "callbacks": {}
    },
    "Flex129": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex130": {
      "styles": {
        "display": "flex",
        "width": "50%",
        "alignItems": "center",
        "justifyContent": "center"
      },
      "callbacks": {}
    },
    "Flex131": {
      "styles": {
        "display": "flex",
        "marginBottom": "",
        "alignItems": "center",
        "justifyContent": "space-around",
        "paddingLeft": "150px",
        "paddingTop": "240px",
        "paddingBottom": "300px",
        "paddingRight": "150px"
      },
      "callbacks": {}
    },
    "Image64": {
      "styles": {
        "height": "300px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6666.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "styles": {
        "paddingTop": "10px"
      },
      "custom": {
        "text": "pompeopotery@gmail.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox111": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "EMAIL"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image65": {
      "styles": {
        "width": "50px",
        "height": "50px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-mail-24.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "styles": {
        "width": "80%",
        "alignSelf": "auto",
        "textAlign": "center",
        "paddingTop": "10px"
      },
      "custom": {
        "text": "Central Park, Manhattan New York, 1101"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox113": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "FIND"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image66": {
      "styles": {
        "width": "50px",
        "height": "50px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-address-100.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox114": {
      "styles": {
        "paddingTop": "10px"
      },
      "custom": {
        "text": "+1 292 345 678"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox115": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "CALL"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image67": {
      "styles": {
        "width": "50px",
        "height": "50px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-phone-80.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex132": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "7px"
      },
      "callbacks": {}
    },
    "Flex133": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "rowGap": "7px"
      },
      "callbacks": {}
    },
    "Flex134": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "7px"
      },
      "callbacks": {}
    },
    "Flex135": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingRight": "",
        "justifyContent": "space-between",
        "columnGap": "190px",
        "alignItems": "center",
        "paddingTop": "30px"
      },
      "callbacks": {}
    },
    "TextBox116": {
      "styles": {
        "width": "33%"
      },
      "custom": {
        "text": "I have always striven to fix beauty in wood, stone, glass or pottery, that has been my creed."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "30px",
        "paddingLeft": ""
      },
      "custom": {
        "text": "Pompeo"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex136": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#FBFBFB",
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "column",
        "paddingTop": "100px",
        "rowGap": "20px",
        "paddingLeft": "50px",
        "paddingRight": "50px",
        "paddingBottom": "90px"
      },
      "callbacks": {}
    }
  },
  "contact-us": {
    "Image68": {
      "styles": {
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/cart-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox118": {
      "styles": {},
      "custom": {
        "text": "Cart"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex137": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "cursor": "pointer",
        "paddingLeft": "10px",
        "borderLeftWidth": "2px",
        "borderLeftStyle": "solid",
        "borderLeftColor": "#a4a4a4"
      },
      "callbacks": {}
    },
    "TextBox119": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox121": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox122": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox123": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "30px",
        "paddingLeft": "150px",
        "cursor": "pointer"
      },
      "custom": {
        "text": "Pompeo"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex138": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "50px",
        "paddingRight": "100px"
      },
      "callbacks": {}
    },
    "Flex139": {
      "styles": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex140": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "15px",
        "paddingBottom": "15px",
        "position": "sticky"
      },
      "callbacks": {}
    },
    "TextBox124": {
      "styles": {
        "color": "#ffffff",
        "width": "400px"
      },
      "custom": {
        "text": "The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox125": {
      "styles": {
        "color": "#ffffff",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "32px"
      },
      "custom": {
        "text": "Contact Us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex141": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "justifyContent": "center",
        "paddingLeft": "150px",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "Flex142": {
      "styles": {
        "display": "flex",
        "backgroundImage": "url(\"/app-assets/nordwood-themes-wvUs06Rtu5E-unsplash%20(1).jpg\")",
        "backgroundRepeat": "repeat-x",
        "height": "60%",
        "backgroundPositionX": "250px",
        "backgroundColor": "#NaNNaNNaN1a",
        "backgroundOrigin": "border-box",
        "backgroundAttachment": "scroll",
        "backgroundClip": "content-box",
        "WebkitBackgroundClip": "content-box",
        "backgroundPositionY": "-200px"
      },
      "callbacks": {}
    },
    "TextBox126": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "CALL"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox127": {
      "styles": {
        "paddingTop": "10px"
      },
      "custom": {
        "text": "+1 292 345 678"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox128": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "FIND"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox129": {
      "styles": {
        "width": "80%",
        "alignSelf": "auto",
        "textAlign": "center",
        "paddingTop": "10px"
      },
      "custom": {
        "text": "Central Park, Manhattan New York, 1101"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox130": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "EMAIL"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox131": {
      "styles": {
        "paddingTop": "10px"
      },
      "custom": {
        "text": "pompeopotery@gmail.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex143": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "7px"
      },
      "callbacks": {}
    },
    "Flex144": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "rowGap": "7px"
      },
      "callbacks": {}
    },
    "Flex145": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "7px"
      },
      "callbacks": {}
    },
    "TextBox132": {
      "styles": {
        "fontFamily": "",
        "fontWeight": 600,
        "fontSize": "17px",
        "paddingLeft": "",
        "color": "#D77474"
      },
      "custom": {
        "text": "Contact Us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox133": {
      "styles": {
        "width": "33%",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "30px",
        "alignSelf": "auto",
        "textAlign": "center"
      },
      "custom": {
        "text": "Lets Get In Touch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex146": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingRight": "",
        "justifyContent": "space-around",
        "columnGap": "100px",
        "alignItems": "center",
        "paddingTop": "30px",
        "paddingBottom": "50px"
      },
      "callbacks": {}
    },
    "Flex147": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F8F8F8",
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "column",
        "paddingTop": "100px",
        "rowGap": "20px",
        "paddingLeft": "220px",
        "paddingRight": "220px",
        "paddingBottom": "90px"
      },
      "callbacks": {}
    },
    "Flex148": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#ffffff",
        "width": "100%",
        "paddingBottom": "50px",
        "flexDirection": "column",
        "paddingTop": ""
      },
      "callbacks": {}
    },
    "Flex149": {
      "styles": {
        "display": "flex",
        "width": "100%",
        "backgroundImage": "url(\"/app-assets/Screenshot%202022-09-24%20at%2011.06.29%20PM.png\")",
        "height": "200px"
      },
      "callbacks": {}
    },
    "Flex151": {
      "styles": {
        "display": "flex",
        "paddingTop": "30px"
      },
      "callbacks": {}
    },
    "Flex152": {
      "styles": {
        "display": "flex",
        "paddingLeft": "40px",
        "paddingRight": "40px",
        "paddingTop": "40px",
        "paddingBottom": "40px",
        "width": "33%",
        "borderStyle": "none",
        "borderRightStyle": "solid",
        "borderRightColor": "#e6e6e6"
      },
      "callbacks": {}
    },
    "Flex153": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingLeft": "50px",
        "rowGap": "10px",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "Flex154": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#e5e3deff",
        "width": "100%",
        "height": "100%"
      },
      "callbacks": {}
    },
    "TextBox134": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 500,
        "fontSize": "24px"
      },
      "custom": {
        "text": "Drop Us a Line"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex155": {
      "styles": {
        "display": "flex",
        "columnGap": "40px"
      },
      "callbacks": {}
    },
    "Flex156": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "4px"
      },
      "callbacks": {}
    },
    "TextBox135": {
      "styles": {},
      "custom": {
        "text": "Name:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex158": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "columnGap": "5px",
        "backgroundColor": "#FBFBFB",
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "paddingTop": "10px",
        "paddingBottom": "10px"
      },
      "callbacks": {}
    },
    "Image72": {
      "styles": {
        "width": "25px",
        "height": "25px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-address-100.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input4": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#FBFBFB",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#d9d9d9",
        "borderRadius": "2px"
      },
      "custom": {
        "value": "",
        "placeholder": "Your name"
      },
      "callbacks": {}
    },
    "Input5": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#FBFBFB",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#d9d9d9",
        "borderRadius": "2px"
      },
      "custom": {
        "value": "",
        "placeholder": "Your email"
      },
      "callbacks": {}
    },
    "Image73": {
      "styles": {
        "width": "25px",
        "height": "25px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-mail-24.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex159": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "columnGap": "5px",
        "backgroundColor": "#FBFBFB",
        "paddingTop": "10px",
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "paddingBottom": "10px"
      },
      "callbacks": {}
    },
    "TextBox136": {
      "styles": {},
      "custom": {
        "text": "Email Address:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex160": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "4px"
      },
      "callbacks": {}
    },
    "Flex161": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "5px"
      },
      "callbacks": {}
    },
    "TextBox137": {
      "styles": {},
      "custom": {
        "text": "Message:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox138": {
      "styles": {},
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input6": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#FBFBFB",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#d9d9d9",
        "borderRadius": "2px",
        "height": "200px",
        "alignSelf": "auto",
        "textAlign": "center"
      },
      "custom": {
        "value": "",
        "placeholder": "How can we help ?",
        "isPasswordField": false
      },
      "callbacks": {}
    },
    "Button5": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#AC1314",
        "paddingTop": "15px",
        "paddingLeft": "15px",
        "paddingBottom": "15px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 300,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "width": "40%",
        "fontFamily": "Open Sans"
      },
      "custom": {
        "text": "Send Message"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image74": {
      "styles": {
        "width": "50px",
        "height": "50px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-phone-80.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox139": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "CALL"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox140": {
      "styles": {
        "paddingTop": "10px"
      },
      "custom": {
        "text": "+1 292 345 678"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image75": {
      "styles": {
        "width": "50px",
        "height": "50px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-address-100.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox141": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "FIND"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox142": {
      "styles": {
        "width": "80%",
        "alignSelf": "auto",
        "textAlign": "center",
        "paddingTop": "10px"
      },
      "custom": {
        "text": "Central Park, Manhattan New York, 1101"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image76": {
      "styles": {
        "width": "50px",
        "height": "50px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-mail-24.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "EMAIL"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox144": {
      "styles": {
        "paddingTop": "10px"
      },
      "custom": {
        "text": "pompeopotery@gmail.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex162": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "7px"
      },
      "callbacks": {}
    },
    "Flex163": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "rowGap": "7px"
      },
      "callbacks": {}
    },
    "Flex164": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "7px"
      },
      "callbacks": {}
    },
    "TextBox145": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "30px",
        "paddingLeft": ""
      },
      "custom": {
        "text": "Pompeo"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "styles": {
        "width": "33%"
      },
      "custom": {
        "text": "I have always striven to fix beauty in wood, stone, glass or pottery, that has been my creed."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex165": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingRight": "",
        "justifyContent": "space-between",
        "columnGap": "190px",
        "alignItems": "center",
        "paddingTop": "30px"
      },
      "callbacks": {}
    },
    "Flex166": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#FBFBFB",
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "column",
        "paddingTop": "100px",
        "rowGap": "20px",
        "paddingLeft": "50px",
        "paddingRight": "50px",
        "paddingBottom": "90px"
      },
      "callbacks": {}
    }
  },
  "product": {
    "Image77": {
      "styles": {
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/cart-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox147": {
      "styles": {},
      "custom": {
        "text": "Cart"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex167": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "cursor": "pointer",
        "paddingLeft": "10px",
        "borderLeftWidth": "2px",
        "borderLeftStyle": "solid",
        "borderLeftColor": "#a4a4a4"
      },
      "callbacks": {}
    },
    "TextBox148": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox149": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox150": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox151": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox152": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "30px",
        "paddingLeft": "150px",
        "cursor": "pointer"
      },
      "custom": {
        "text": "Pompeo"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex168": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "50px",
        "paddingRight": "100px"
      },
      "callbacks": {}
    },
    "Flex169": {
      "styles": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex170": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "15px",
        "paddingBottom": "15px",
        "position": "sticky"
      },
      "callbacks": {}
    },
    "TextBox153": {
      "styles": {
        "color": "#ffffff",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "32px"
      },
      "custom": {
        "text": "Product Page"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox154": {
      "styles": {
        "color": "#ffffff",
        "width": "400px"
      },
      "custom": {
        "text": "The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex171": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "justifyContent": "center",
        "paddingLeft": "150px",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "Flex172": {
      "styles": {
        "display": "flex",
        "backgroundImage": "url(\"/app-assets/nordwood-themes-wvUs06Rtu5E-unsplash%20(1).jpg\")",
        "backgroundRepeat": "repeat-x",
        "height": "60%",
        "backgroundPositionX": "150px",
        "backgroundColor": "#NaNNaNNaN1a",
        "backgroundOrigin": "border-box",
        "backgroundAttachment": "scroll",
        "backgroundClip": "content-box",
        "WebkitBackgroundClip": "content-box",
        "backgroundPositionY": "-200px"
      },
      "callbacks": {}
    },
    "Flex173": {
      "styles": {
        "display": "flex",
        "paddingLeft": "150px",
        "paddingRight": "150px",
        "paddingTop": "150px",
        "paddingBottom": "150px"
      },
      "callbacks": {}
    },
    "Flex174": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex175": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "paddingBottom": "",
        "paddingLeft": "100px",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Image78": {
      "styles": {
        "height": "500px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/55.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox155": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "24px"
      },
      "custom": {
        "text": "Blue Plate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox156": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 400,
        "color": "#D77474"
      },
      "custom": {
        "text": "PRODUCT DETAIL"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox157": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 500,
        "fontSize": "15px"
      },
      "custom": {
        "text": "$ 65.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox158": {
      "styles": {},
      "custom": {
        "text": "Category:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox159": {
      "styles": {
        "fontSize": "13px",
        "color": "#676767"
      },
      "custom": {
        "text": "The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox160": {
      "styles": {},
      "custom": {
        "text": "Quantity"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex176": {
      "styles": {
        "display": "flex",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox161": {
      "styles": {},
      "custom": {
        "text": "Share on:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox162": {
      "styles": {},
      "custom": {
        "text": "Track Number:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input7": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "5px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#767575",
        "fontSize": "14px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#d9d9d9",
        "borderRadius": "2px",
        "width": "30%",
        "position": "relative",
        "bottom": 13
      },
      "custom": {
        "value": "1",
        "placeholder": "Placeholder Text"
      },
      "callbacks": {}
    },
    "Button6": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#AC1314",
        "paddingTop": "15px",
        "paddingLeft": "15px",
        "paddingBottom": "15px",
        "paddingRight": "15px",
        "fontSize": "14px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 300,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Open Sans",
        "width": "40%",
        "position": "relative",
        "bottom": 25
      },
      "custom": {
        "text": "Add to cart"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex179": {
      "styles": {
        "display": "flex",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox163": {
      "styles": {
        "color": "#6c6c6c"
      },
      "custom": {
        "text": "Plates"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex180": {
      "styles": {
        "display": "flex",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox164": {
      "styles": {
        "color": "#6c6c6c"
      },
      "custom": {
        "text": "234567"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image79": {
      "styles": {
        "width": "14px",
        "height": "14px",
        "borderRadius": "1px",
        "borderStyle": "solid",
        "borderColor": "#c9c8c8",
        "paddingTop": "2px",
        "paddingLeft": "2px",
        "paddingBottom": "2px",
        "paddingRight": "2px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook-logo-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image80": {
      "styles": {
        "width": "14px",
        "height": "14px",
        "borderRadius": "1px",
        "borderStyle": "solid",
        "borderColor": "#c9c8c8",
        "paddingLeft": "2px",
        "paddingTop": "2px",
        "paddingBottom": "2px",
        "paddingRight": "2px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image81": {
      "styles": {
        "width": "14px",
        "height": "14px",
        "borderRadius": "1px",
        "borderStyle": "solid",
        "borderColor": "#c9c8c8",
        "paddingTop": "2px",
        "paddingLeft": "2px",
        "paddingBottom": "2px",
        "paddingRight": "2px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/google-plus-logo-symbol-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex181": {
      "styles": {
        "display": "flex",
        "columnGap": "3px"
      },
      "callbacks": {}
    },
    "Image82": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/22.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image83": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/11.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image84": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/33.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox165": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox166": {
      "styles": {},
      "custom": {
        "text": "Mint Pottery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex182": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "backgroundColor": "#F2F2F2",
        "width": "100%",
        "height": "100%"
      },
      "callbacks": {}
    },
    "TextBox167": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex183": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2",
        "width": "100%"
      },
      "callbacks": {}
    },
    "TextBox168": {
      "styles": {},
      "custom": {
        "text": "Decor Plate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox169": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox170": {
      "styles": {},
      "custom": {
        "text": "Set Of Potterys"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex184": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2",
        "width": "100%"
      },
      "callbacks": {}
    },
    "Flex190": {
      "styles": {
        "display": "flex",
        "paddingLeft": "100px"
      },
      "callbacks": {}
    },
    "TextBox171": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 500,
        "fontSize": "24px"
      },
      "custom": {
        "text": "Related Items"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image85": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/22.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image86": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/11.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image87": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/33.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox172": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox173": {
      "styles": {},
      "custom": {
        "text": "Mint Pottery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex191": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "backgroundColor": "#F2F2F2",
        "width": "100%",
        "height": "100%"
      },
      "callbacks": {}
    },
    "TextBox174": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex192": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2",
        "width": "100%"
      },
      "callbacks": {}
    },
    "TextBox175": {
      "styles": {},
      "custom": {
        "text": "Decor Plate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox176": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox177": {
      "styles": {},
      "custom": {
        "text": "Set Of Potterys"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex193": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2",
        "width": "100%"
      },
      "callbacks": {}
    },
    "Flex194": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex195": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex196": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex197": {
      "styles": {
        "display": "flex",
        "paddingLeft": "150px",
        "paddingRight": "150px",
        "flexDirection": "row",
        "columnGap": "20px",
        "paddingTop": "45px",
        "paddingBottom": "30px"
      },
      "callbacks": {}
    },
    "Flex198": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "paddingBottom": "100px"
      },
      "callbacks": {}
    },
    "Button7": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#AC1314",
        "paddingTop": "15px",
        "paddingLeft": "15px",
        "paddingBottom": "15px",
        "paddingRight": "15px",
        "fontSize": "14px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 300,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "Open Sans"
      },
      "custom": {
        "text": "BACK TO SHOP"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "shop": {
    "TextBox178": {
      "styles": {},
      "custom": {
        "text": "Cart"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image88": {
      "styles": {
        "width": "20px",
        "height": "20px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/cart-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox179": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "30px",
        "paddingLeft": "150px",
        "cursor": "pointer"
      },
      "custom": {
        "text": "Pompeo"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox180": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox181": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox182": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox183": {
      "styles": {
        "cursor": "pointer"
      },
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex199": {
      "styles": {
        "display": "flex",
        "columnGap": "10px",
        "cursor": "pointer",
        "paddingLeft": "10px",
        "borderLeftWidth": "2px",
        "borderLeftStyle": "solid",
        "borderLeftColor": "#a4a4a4"
      },
      "callbacks": {}
    },
    "Flex200": {
      "styles": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex201": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "columnGap": "50px",
        "paddingRight": "100px"
      },
      "callbacks": {}
    },
    "Flex202": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingTop": "15px",
        "paddingBottom": "15px",
        "position": "sticky"
      },
      "callbacks": {}
    },
    "TextBox184": {
      "styles": {
        "color": "#ffffff",
        "width": "400px"
      },
      "custom": {
        "text": "The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox185": {
      "styles": {
        "color": "#ffffff",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "32px"
      },
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex203": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "justifyContent": "center",
        "paddingLeft": "150px",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "Flex204": {
      "styles": {
        "display": "flex",
        "backgroundImage": "url(\"/app-assets/nordwood-themes-wvUs06Rtu5E-unsplash%20(1).jpg\")",
        "backgroundRepeat": "repeat-x",
        "height": "60%",
        "backgroundPositionX": "150px",
        "backgroundColor": "#NaNNaNNaN1a",
        "backgroundOrigin": "border-box",
        "backgroundAttachment": "scroll",
        "backgroundClip": "content-box",
        "WebkitBackgroundClip": "content-box",
        "backgroundPositionY": "-200px"
      },
      "callbacks": {}
    },
    "Flex205": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "paddingTop": "100px",
        "rowGap": "30px",
        "paddingBottom": "75px"
      },
      "callbacks": {}
    },
    "TextBox186": {
      "styles": {
        "color": "#D77474"
      },
      "custom": {
        "text": "OUR ONLINE STORE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox187": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "28px"
      },
      "custom": {
        "text": "Ceramic Collection"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image89": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/66.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image90": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/44.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image91": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/55.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image92": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/22.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image93": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/11.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image94": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/33.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox188": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex206": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2",
        "width": "100%"
      },
      "callbacks": {}
    },
    "TextBox189": {
      "styles": {},
      "custom": {
        "text": "Square Pottery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox190": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox191": {
      "styles": {},
      "custom": {
        "text": "Orange Ceramic"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex207": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2",
        "width": "100%"
      },
      "callbacks": {}
    },
    "TextBox192": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox193": {
      "styles": {},
      "custom": {
        "text": "Dark Bowl"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex208": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "backgroundColor": "#F2F2F2",
        "width": "100%",
        "height": "100%"
      },
      "callbacks": {}
    },
    "TextBox194": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox195": {
      "styles": {},
      "custom": {
        "text": "Mint Pottery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex209": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "backgroundColor": "#F2F2F2",
        "width": "100%",
        "height": "100%"
      },
      "callbacks": {}
    },
    "TextBox196": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex210": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2",
        "width": "100%"
      },
      "callbacks": {}
    },
    "TextBox197": {
      "styles": {},
      "custom": {
        "text": "Decor Plate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox198": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox199": {
      "styles": {},
      "custom": {
        "text": "Set Of Potterys"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex211": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2",
        "width": "100%"
      },
      "callbacks": {}
    },
    "Flex212": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex213": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex214": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex215": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex216": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex217": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex218": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingRight": "",
        "flexDirection": "row",
        "columnGap": "20px",
        "paddingTop": "",
        "paddingBottom": "50px"
      },
      "callbacks": {}
    },
    "Flex219": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingRight": "",
        "flexDirection": "row",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "Flex220": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "30px",
        "paddingBottom": "",
        "paddingLeft": "150px",
        "paddingRight": "150px"
      },
      "callbacks": {}
    },
    "Image95": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/55.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image96": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/44.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image97": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/66.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex221": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "backgroundColor": "#F2F2F2",
        "width": "100%",
        "height": "100%"
      },
      "callbacks": {}
    },
    "TextBox200": {
      "styles": {},
      "custom": {
        "text": "Dark Bowl"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox201": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex222": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2",
        "width": "100%"
      },
      "callbacks": {}
    },
    "TextBox202": {
      "styles": {},
      "custom": {
        "text": "Orange Ceramic"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox203": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox204": {
      "styles": {},
      "custom": {
        "text": "Square Pottery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex223": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2",
        "width": "100%"
      },
      "callbacks": {}
    },
    "TextBox205": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex224": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex225": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex226": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex227": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingRight": "",
        "flexDirection": "row",
        "columnGap": "20px",
        "paddingTop": "",
        "paddingBottom": "50px"
      },
      "callbacks": {}
    },
    "Image98": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/55.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image99": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/44.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image100": {
      "styles": {
        "height": "100%",
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/66.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex228": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "backgroundColor": "#F2F2F2",
        "width": "100%",
        "height": "100%"
      },
      "callbacks": {}
    },
    "TextBox206": {
      "styles": {},
      "custom": {
        "text": "Dark Bowl"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox207": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex229": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2",
        "width": "100%"
      },
      "callbacks": {}
    },
    "TextBox208": {
      "styles": {},
      "custom": {
        "text": "Orange Ceramic"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox209": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox210": {
      "styles": {},
      "custom": {
        "text": "Square Pottery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex230": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#F2F2F2",
        "width": "100%"
      },
      "callbacks": {}
    },
    "TextBox211": {
      "styles": {
        "position": "relative",
        "bottom": 17,
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "14px"
      },
      "custom": {
        "text": "$ 55.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex231": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex232": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex233": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "33%",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex234": {
      "styles": {
        "display": "flex",
        "paddingLeft": "",
        "paddingRight": "",
        "flexDirection": "row",
        "columnGap": "20px",
        "paddingTop": "",
        "paddingBottom": "50px"
      },
      "callbacks": {}
    },
    "Input8": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#FBFBFB",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#d9d9d9",
        "borderRadius": "2px",
        "width": "80%"
      },
      "custom": {
        "value": "",
        "placeholder": "Enter your email"
      },
      "callbacks": {}
    },
    "Image101": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-mail-24.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox212": {
      "styles": {},
      "custom": {
        "text": "Sign up for our newsletter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Checkbox2": {
      "styles": {},
      "custom": {
        "checked": true
      },
      "callbacks": {}
    },
    "Button9": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#000000",
        "paddingTop": "15px",
        "paddingLeft": "25px",
        "paddingBottom": "15px",
        "paddingRight": "25px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none"
      },
      "custom": {
        "text": "SUBSCRIBE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex235": {
      "styles": {
        "display": "flex",
        "justifyContent": "flex-start",
        "alignItems": "center",
        "backgroundColor": "#FBFBFB",
        "width": "400px",
        "paddingLeft": "20px"
      },
      "callbacks": {}
    },
    "Flex236": {
      "styles": {
        "display": "flex",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Flex237": {
      "styles": {
        "display": "flex",
        "paddingRight": "",
        "columnGap": "5px"
      },
      "callbacks": {}
    },
    "TextBox213": {
      "styles": {
        "color": "#D77474"
      },
      "custom": {
        "text": "LATEST NEWS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox214": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "32px"
      },
      "custom": {
        "text": "Latest news & New updates"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image102": {
      "styles": {
        "width": "100px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-sent-50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex238": {
      "styles": {
        "display": "flex",
        "paddingTop": "100px",
        "alignItems": "center",
        "justifyContent": "flex-start",
        "flexDirection": "column",
        "rowGap": "30px",
        "paddingBottom": "150px"
      },
      "callbacks": {}
    }
  }
}};

const breakpointProps = {
  ...{
  "Home": {},
  "about-us": {},
  "contact-us": {},
  "product": {},
  "shop": {}
}};

function getViewportDimension() {
  const width = Math.min(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const height = Math.min(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  return { width, height };
}

function getEffectiveBreakpointWidths(pageName, windowWidth) {
  if (breakpointProps[pageName] === undefined) {
    return [];
  }
  const widths = Object.keys(breakpointProps[pageName]);
  return widths
    .filter((curr) => {
      return parseInt(curr) >= windowWidth;
    })
    .sort((a, b) => {
      return parseInt(b) - parseInt(a);
    });
}

/**
 *
 * effective props is combination of
 */
function getEffectivePropsForPage(pageName) {
  const { width } = getViewportDimension();
  // effectiveProps initially has local changes
  let effectiveProps = JSON.parse(
    JSON.stringify(useStore.getState()[pageName])
  );
  const effectiveWidths = getEffectiveBreakpointWidths(pageName, width);
  effectiveWidths.forEach((effectiveWidth) => {
    const compAliases = Object.keys(breakpointProps[pageName][effectiveWidth]);
    compAliases.forEach((compAlias) => {
      const propNames = Object.keys(
        breakpointProps[pageName][effectiveWidth][compAlias]
      );
      propNames.forEach((propName) => {
        effectiveProps[compAlias][propName] = {
          ...useStore.getState()[pageName][compAlias][propName],
          ...breakpointProps[pageName][effectiveWidth][compAlias][propName],
        };
      });
    });
  });
  return effectiveProps;
}

export function setEffectivePropsForPage(pageName) {
  const effectiveProps = getEffectivePropsForPage(pageName);
  useStore.getState().setPage(pageName, effectiveProps);
}

useStore.setState(desktopModeProps);

export default useStore;
