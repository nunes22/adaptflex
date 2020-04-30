

import * as Cn from "../../../node_modules/re-classnames/src/Cn.bs.js";
import * as Css from "../../../node_modules/bs-css-emotion/src/Css.js";
import * as Curry from "../../../node_modules/bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Theme$Nunes22Adaptflex from "../../theme/Theme.bs.js";
import * as ThemeContext$Nunes22Adaptflex from "../../theme/ThemeContext.bs.js";

var card = Curry._1(Css.style, /* :: */[
      Css.top(Css.px(100)),
      /* [] */0
    ]);

var Styles = {
  card: card
};

function Card(Props) {
  var children = Props.children;
  var fullScreenOpt = Props.fullScreen;
  var classNameOpt = Props.className;
  var fullScreen = fullScreenOpt !== undefined ? fullScreenOpt : false;
  var className = classNameOpt !== undefined ? classNameOpt : (function (param) {
        return "";
      });
  var theme = React.useContext(ThemeContext$Nunes22Adaptflex.themeContext);
  var styles = Theme$Nunes22Adaptflex.cardStyles(theme);
  return React.createElement("div", {
              className: Cn.make(/* :: */[
                    styles,
                    /* :: */[
                      Cn.ifTrue(Theme$Nunes22Adaptflex.fullScreen(theme), fullScreen),
                      /* :: */[
                        Curry._1(className, /* () */0),
                        /* [] */0
                      ]
                    ]
                  ])
            }, children);
}

var make = Card;

export {
  Styles ,
  make ,
  
}
/* card Not a pure module */
