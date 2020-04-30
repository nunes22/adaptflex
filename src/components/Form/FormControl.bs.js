

import * as Css from "../../../node_modules/bs-css-emotion/src/Css.js";
import * as Curry from "../../../node_modules/bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Caml_option from "../../../node_modules/bs-platform/lib/es6/caml_option.js";
import * as Input$Nunes22Adaptflex from "../Input.bs.js";

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

export {
  Styles ,
  make ,
  
}
/* container Not a pure module */
