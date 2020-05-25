

import * as React from "react";
import * as Card$Nunes22Adaptflex from "./components/Card/Card.bs.js";
import * as Input$Nunes22Adaptflex from "./components/Input.bs.js";
import * as Theme$Nunes22Adaptflex from "./theme/Theme.bs.js";
import * as Button$Nunes22Adaptflex from "./components/Button/Button.bs.js";
import * as Inline$Nunes22Adaptflex from "./components/Inline.bs.js";
import * as Typography$Nunes22Adaptflex from "./components/Typography.bs.js";

Theme$Nunes22Adaptflex.globalStyles(/* () */0);

var Styles = { };

function App(Props) {
  return React.createElement("div", undefined, React.createElement(Typography$Nunes22Adaptflex.H1.make, {
                  children: "Button"
                }), React.createElement(Button$Nunes22Adaptflex.make, {
                  children: "Button"
                }), React.createElement(Typography$Nunes22Adaptflex.H1.make, {
                  children: "Button Variant"
                }), React.createElement(Button$Nunes22Adaptflex.make, {
                  children: "Primary Button",
                  variant: /* Primary */1
                }), React.createElement(Button$Nunes22Adaptflex.make, {
                  children: "Secondary Button",
                  variant: /* Secondary */2
                }), React.createElement(Button$Nunes22Adaptflex.make, {
                  children: "Ghost Button",
                  variant: /* Ghost */3
                }), React.createElement(Typography$Nunes22Adaptflex.H1.make, {
                  children: "Button Size"
                }), React.createElement(Button$Nunes22Adaptflex.make, {
                  children: "Small Button",
                  size: /* Small */0
                }), React.createElement(Button$Nunes22Adaptflex.make, {
                  children: "Button",
                  size: /* Medium */1
                }), React.createElement(Button$Nunes22Adaptflex.make, {
                  children: "Large Button",
                  size: /* Large */2
                }), React.createElement("hr", undefined), React.createElement(Typography$Nunes22Adaptflex.H1.make, {
                  children: "Card"
                }), React.createElement(Card$Nunes22Adaptflex.make, {
                  children: "Card"
                }), React.createElement("hr", undefined), React.createElement(Typography$Nunes22Adaptflex.H1.make, {
                  children: "Inline"
                }), React.createElement(Inline$Nunes22Adaptflex.make, {
                  children: null
                }, React.createElement(Button$Nunes22Adaptflex.make, {
                      children: "Hi 1"
                    }), React.createElement(Button$Nunes22Adaptflex.make, {
                      children: "Hi 2"
                    })), React.createElement("hr", undefined), React.createElement(Typography$Nunes22Adaptflex.H1.make, {
                  children: "InlineForm"
                }), React.createElement("div", undefined, "TBD"), React.createElement("hr", undefined), React.createElement(Typography$Nunes22Adaptflex.H1.make, {
                  children: "Input"
                }), React.createElement(Input$Nunes22Adaptflex.make, {
                  type_: "text",
                  value: "Foo"
                }), React.createElement("hr", undefined), React.createElement(Typography$Nunes22Adaptflex.H1.make, {
                  children: "FormControl"
                }), React.createElement("div", undefined, "TBD"), React.createElement("hr", undefined), React.createElement(Typography$Nunes22Adaptflex.H1.make, {
                  children: "OffCanvas"
                }), React.createElement("div", undefined, "TBD"), React.createElement("hr", undefined), React.createElement(Typography$Nunes22Adaptflex.H1.make, {
                  children: "Stack"
                }), React.createElement("div", undefined, "TBD"), React.createElement(Typography$Nunes22Adaptflex.H1.make, {
                  children: "Toolbar"
                }), React.createElement("div", undefined, "TBD"), React.createElement(Typography$Nunes22Adaptflex.H1.make, {
                  children: "Typography"
                }), React.createElement("div", undefined, "TBD"));
}

var make = App;

export {
  Styles ,
  make ,
  
}
/*  Not a pure module */
