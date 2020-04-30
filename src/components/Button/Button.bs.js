

import * as Cn from "../../../node_modules/re-classnames/src/Cn.bs.js";
import * as React from "react";
import * as Caml_option from "../../../node_modules/bs-platform/lib/es6/caml_option.js";
import * as Util$Nunes22Adaptflex from "../../Util.bs.js";
import * as Theme$Nunes22Adaptflex from "../../theme/Theme.bs.js";
import * as ThemeContext$Nunes22Adaptflex from "../../theme/ThemeContext.bs.js";

function Button(Props) {
  var children = Props.children;
  var onClick = Props.onClick;
  var type_ = Props.type_;
  var dataTestid = Props.dataTestid;
  var sizeOpt = Props.size;
  var variantOpt = Props.variant;
  var className = Props.className;
  var size = sizeOpt !== undefined ? sizeOpt : /* Medium */1;
  var variant = variantOpt !== undefined ? variantOpt : /* Default */0;
  var theme = React.useContext(ThemeContext$Nunes22Adaptflex.themeContext);
  var styles = Theme$Nunes22Adaptflex.buttonStyles(theme, variant, size);
  var tmp = {
    className: Cn.make(/* :: */[
          styles,
          /* :: */[
            Cn.mapSome(className, (function (c) {
                    return c;
                  })),
            /* [] */0
          ]
        ])
  };
  if (type_ !== undefined) {
    tmp.type = Caml_option.valFromOption(type_);
  }
  if (onClick !== undefined) {
    tmp.onClick = Caml_option.valFromOption(onClick);
  }
  var button = React.createElement("button", tmp, children);
  if (dataTestid !== undefined) {
    return React.createElement(Util$Nunes22Adaptflex.WithTestId.make, {
                id: dataTestid,
                children: button
              });
  } else {
    return button;
  }
}

var make = Button;

export {
  make ,
  
}
/* react Not a pure module */
