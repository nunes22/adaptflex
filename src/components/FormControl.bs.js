'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Input$Nunes22Adaptflex = require("./Input.bs.js");

var container = Curry._1(Css.style, /* :: */[
      Css.marginBottom(Css.px(24)),
      /* [] */0
    ]);

var label = Curry._1(Css.style, /* :: */[
      Css.display(Css.block),
      /* [] */0
    ]);

var Styles = {
  container: container,
  label: label
};

function FormControl(Props) {
  var label$1 = Props.label;
  var type_ = Props.type_;
  var value = Props.value;
  var onChange = Props.onChange;
  var tmp = {
    type_: type_,
    fullWidth: true
  };
  if (value !== undefined) {
    tmp.value = Caml_option.valFromOption(value);
  }
  if (onChange !== undefined) {
    tmp.onChange = Caml_option.valFromOption(onChange);
  }
  return React.createElement("div", {
              className: container
            }, React.createElement("label", undefined, React.createElement("span", {
                      className: label
                    }, label$1), React.createElement(Input$Nunes22Adaptflex.make, tmp)));
}

var make = FormControl;

exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */
