

import * as React from "react";
import * as Theme$Nunes22Adaptflex from "./Theme.bs.js";

var themeContext = React.createContext(Theme$Nunes22Adaptflex.$$default);

function makeProps(value, children, param) {
  return {
          value: value,
          children: children
        };
}

var make = themeContext.Provider;

export {
  themeContext ,
  makeProps ,
  make ,
  
}
/* themeContext Not a pure module */
