'use strict';

var Cn = require("re-classnames/src/Cn.bs.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Util$Nunes22Adaptflex = require("../Util.bs.js");
var Theme$Nunes22Adaptflex = require("../theme/Theme.bs.js");
var ThemeContext$Nunes22Adaptflex = require("../theme/ThemeContext.bs.js");

function Input(Props) {
  var type_ = Props.type_;
  var fullWidthOpt = Props.fullWidth;
  var value = Props.value;
  var onChange = Props.onChange;
  var placeholder = Props.placeholder;
  var dataTestid = Props.dataTestid;
  var fullWidth = fullWidthOpt !== undefined ? fullWidthOpt : false;
  var theme = React.useContext(ThemeContext$Nunes22Adaptflex.themeContext);
  var tmp = {
    className: Cn.make(/* :: */[
          Cn.ifTrue(Theme$Nunes22Adaptflex.fullWidth, fullWidth),
          /* :: */[
            Theme$Nunes22Adaptflex.inputStyles(theme),
            /* [] */0
          ]
        ]),
    type: type_
  };
  if (placeholder !== undefined) {
    tmp.placeholder = Caml_option.valFromOption(placeholder);
  }
  if (value !== undefined) {
    tmp.value = Caml_option.valFromOption(value);
  }
  if (onChange !== undefined) {
    tmp.onChange = Caml_option.valFromOption(onChange);
  }
  var input = React.createElement("input", tmp);
  if (dataTestid !== undefined) {
    return React.createElement(Util$Nunes22Adaptflex.WithTestId.make, {
                id: dataTestid,
                children: input
              });
  } else {
    return input;
  }
}

var make = Input;

exports.make = make;
/* react Not a pure module */
