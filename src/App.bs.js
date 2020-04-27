'use strict';

var React = require("react");
var Card$Nunes22Adaptflex = require("./components/Card.bs.js");
var Input$Nunes22Adaptflex = require("./components/Input.bs.js");
var Theme$Nunes22Adaptflex = require("./theme/Theme.bs.js");
var Button$Nunes22Adaptflex = require("./components/Button.bs.js");
var Inline$Nunes22Adaptflex = require("./components/Inline.bs.js");
var Typography$Nunes22Adaptflex = require("./components/Typography.bs.js");

Theme$Nunes22Adaptflex.globalStyles(Theme$Nunes22Adaptflex.$$default);

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

exports.Styles = Styles;
exports.make = make;
/*  Not a pure module */
