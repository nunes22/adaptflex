'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

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

exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */
