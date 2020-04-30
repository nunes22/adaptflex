

import * as Css from "../../node_modules/bs-css-emotion/src/Css.js";
import * as Curry from "../../node_modules/bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Theme$Nunes22Adaptflex from "../theme/Theme.bs.js";
import * as Button$Nunes22Adaptflex from "./Button/Button.bs.js";
import * as OffCanvas$Nunes22Adaptflex from "./OffCanvas.bs.js";
import * as ThemeContext$Nunes22Adaptflex from "../theme/ThemeContext.bs.js";

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
                        variant: /* Ghost */3
                      })
                }));
}

var make = Toolbar;

export {
  make ,
  
}
/* Css Not a pure module */
