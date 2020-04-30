

import * as Css from "../../node_modules/bs-css-emotion/src/Css.js";
import * as Curry from "../../node_modules/bs-platform/lib/es6/curry.js";
import * as React from "react";

var container = Curry._1(Css.style, /* :: */[
      Css.position(Css.relative),
      /* :: */[
        Css.selector("> *:first-child", /* :: */[
              Css.borderTopRightRadius(Css.zero),
              /* :: */[
                Css.borderBottomRightRadius(Css.zero),
                /* [] */0
              ]
            ]),
        /* :: */[
          Css.selector("> *:last-child", /* :: */[
                Css.position(Css.absolute),
                /* :: */[
                  Css.right(Css.zero),
                  /* :: */[
                    Css.flexShrink(0),
                    /* :: */[
                      Css.borderTopLeftRadius(Css.zero),
                      /* :: */[
                        Css.borderBottomLeftRadius(Css.zero),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]),
          /* [] */0
        ]
      ]
    ]);

var Styles = {
  container: container
};

function InlineForm(Props) {
  var children = Props.children;
  var onSubmit = Props.onSubmit;
  return React.createElement("form", {
              className: container,
              onSubmit: onSubmit
            }, children);
}

var make = InlineForm;

export {
  Styles ,
  make ,
  
}
/* container Not a pure module */
