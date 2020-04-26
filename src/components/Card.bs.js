'use strict';

var Cn = require("re-classnames/src/Cn.bs.js");
var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Theme$Nunes22Adaptflex = require("../theme/Theme.bs.js");
var ThemeContext$Nunes22Adaptflex = require("../theme/ThemeContext.bs.js");

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

exports.Styles = Styles;
exports.make = make;
/* card Not a pure module */
