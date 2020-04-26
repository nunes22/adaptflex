'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Theme$Nunes22Adaptflex = require("../theme/Theme.bs.js");
var Button$Nunes22Adaptflex = require("./Button.bs.js");
var OffCanvas$Nunes22Adaptflex = require("./OffCanvas.bs.js");
var ThemeContext$Nunes22Adaptflex = require("../theme/ThemeContext.bs.js");

function Toolbar(Props) {
  var title = Props.title;
  var onChangeTheme = Props.onChangeTheme;
  var theme = React.useContext(ThemeContext$Nunes22Adaptflex.themeContext);
  var match = React.useState((function () {
          return false;
        }));
  var setOpen = match[1];
  var titleStyles = Curry._1(Css.style, /* :: */[
        Css.fontSize(Css.px(theme.typography.large)),
        /* :: */[
          Css.color(Css.hex(theme.colors.cardBackground)),
          /* [] */0
        ]
      ]);
  return React.createElement("div", {
              className: Theme$Nunes22Adaptflex.toolbarStyles(theme)
            }, React.createElement("h1", {
                  className: titleStyles
                }, title), React.createElement(OffCanvas$Nunes22Adaptflex.make, {
                  children: React.createElement("div", undefined, React.createElement(Button$Nunes22Adaptflex.make, {
                            children: "Default",
                            onClick: (function (param) {
                                return Curry._1(onChangeTheme, Theme$Nunes22Adaptflex.$$default);
                              })
                          }), React.createElement(Button$Nunes22Adaptflex.make, {
                            children: "Default Dark",
                            onClick: (function (param) {
                                return Curry._1(onChangeTheme, Theme$Nunes22Adaptflex.defaultDark);
                              })
                          }), React.createElement(Button$Nunes22Adaptflex.make, {
                            children: "Rainbow",
                            onClick: (function (param) {
                                return Curry._1(onChangeTheme, Theme$Nunes22Adaptflex.rainbow);
                              })
                          }), React.createElement(Button$Nunes22Adaptflex.make, {
                            children: "Rainbow Dark",
                            onClick: (function (param) {
                                return Curry._1(onChangeTheme, Theme$Nunes22Adaptflex.rainbowDark);
                              })
                          })),
                  isOpen: match[0],
                  trigger: React.createElement(Button$Nunes22Adaptflex.make, {
                        children: "🍔",
                        onClick: (function (param) {
                            return Curry._1(setOpen, (function (current) {
                                          return !current;
                                        }));
                          }),
                        size: /* Small */0,
                        variant: /* Ghost */2
                      })
                }));
}

var make = Toolbar;

exports.make = make;
/* Css Not a pure module */
