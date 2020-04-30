

import * as Cn from "../../node_modules/re-classnames/src/Cn.bs.js";
import * as Css from "../../node_modules/bs-css-emotion/src/Css.js";
import * as Curry from "../../node_modules/bs-platform/lib/es6/curry.js";
import * as React from "react";

var container = Curry._1(Css.style, /* :: */[
      Css.position(Css.fixed),
      /* :: */[
        Css.zIndex(1),
        /* :: */[
          Css.backgroundColor(Css.hex("444")),
          /* :: */[
            Css.padding(Css.px(24)),
            /* :: */[
              Css.maxWidth(Css.px(500)),
              /* :: */[
                Css.top(Css.px(58)),
                /* :: */[
                  Css.bottom(Css.zero),
                  /* :: */[
                    Css.right(Css.zero),
                    /* :: */[
                      Css.transform(Css.translateX(Css.pct(100))),
                      /* :: */[
                        Css.transition(330, undefined, Css.cubicBezier(0.18, 0.8, 0.44, 1.0), "all"),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var isOpen = Curry._1(Css.style, /* :: */[
      Css.transform(Css.translateX(Css.zero)),
      /* [] */0
    ]);

var Styles = {
  container: container,
  isOpen: isOpen
};

function OffCanvas(Props) {
  var children = Props.children;
  var isOpen$1 = Props.isOpen;
  var trigger = Props.trigger;
  return React.createElement("div", undefined, trigger, React.createElement("div", {
                  className: Cn.make(/* :: */[
                        container,
                        /* :: */[
                          Cn.ifTrue(isOpen, isOpen$1),
                          /* [] */0
                        ]
                      ])
                }, children));
}

var make = OffCanvas;

export {
  Styles ,
  make ,
  
}
/* container Not a pure module */
