'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

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

exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */
