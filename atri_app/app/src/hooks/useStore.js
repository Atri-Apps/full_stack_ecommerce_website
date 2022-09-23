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
        "position": "sticky"
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
        "paddingRight": "60px"
      },
      "callbacks": {}
    },
    "TextBox1": {
      "styles": {
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "30px",
        "paddingLeft": "50px"
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
      "styles": {},
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
      "styles": {},
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
      "styles": {},
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
      "styles": {},
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
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Image1": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.svg"
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
        "paddingTop": "140px"
      },
      "callbacks": {}
    },
    "Flex6": {
      "styles": {
        "display": "flex",
        "alignItems": "stretch",
        "flexDirection": "column",
        "width": "50%",
        "paddingLeft": "50px",
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
        "color": "#666666"
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
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
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
        "fontSize": "38px"
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
        "width": "200px",
        "height": "200px",
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
        "width": "200px",
        "height": "200px",
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
        "width": "200px",
        "height": "200px",
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
        "columnGap": "90px"
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
        "paddingLeft": "50px",
        "boxSizing": "border-box",
        "paddingRight": "50px",
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
        "paddingLeft": "50px",
        "paddingTop": "300px"
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
        "paddingLeft": "50px",
        "paddingTop": "300px",
        "paddingRight": "50px",
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
        "marginBottom": "400px",
        "paddingLeft": "50px",
        "paddingRight": "50px",
        "boxSizing": "border-box"
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
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 500,
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
    }
  }
}};

const breakpointProps = {
  ...{
  "Home": {}
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
