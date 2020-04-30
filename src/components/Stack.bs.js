

import * as Css from "../../node_modules/bs-css-emotion/src/Css.js";
import * as Curry from "../../node_modules/bs-platform/lib/es6/curry.js";
import * as React from "react";

var container = Curry._1(Css.style, /* :: */[
      Css.selector("> *", /* :: */[
            Css.marginBottom(Css.px(24)),
            /* [] */0
          ]),
      /* :: */[
        Css.selector("> *:last-child", /* :: */[
              Css.marginBottom(Css.px(0)),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var Styles = {
  container: container
};

function Stack(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: container
            }, children);
}

var make = Stack;

export {
  Styles ,
  make ,
  
}
/* container Not a pure module */
