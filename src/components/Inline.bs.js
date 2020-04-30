

import * as Css from "../../node_modules/bs-css-emotion/src/Css.js";
import * as Curry from "../../node_modules/bs-platform/lib/es6/curry.js";
import * as React from "react";

var container = Curry._1(Css.style, /* :: */[
      Css.display(Css.inlineFlex),
      /* :: */[
        Css.selector("> *", /* :: */[
              Css.marginRight(Css.px(12)),
              /* [] */0
            ]),
        /* :: */[
          Css.selector("> *:last-child", /* :: */[
                Css.marginRight(Css.px(0)),
                /* [] */0
              ]),
          /* [] */0
        ]
      ]
    ]);

var Styles = {
  container: container
};

function Inline(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: container
            }, children);
}

var make = Inline;

export {
  Styles ,
  make ,
  
}
/* container Not a pure module */
