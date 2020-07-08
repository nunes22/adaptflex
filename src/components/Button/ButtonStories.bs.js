

import * as React from "react";
import * as React$1 from "@storybook/react";
import * as Theme$Nunes22Adaptflex from "../../theme/Theme.bs.js";
import * as Button$Nunes22Adaptflex from "./Button.bs.js";
import * as ThemeContext$Nunes22Adaptflex from "../../theme/ThemeContext.bs.js";

var _module = module;

React$1.storiesOf("Button", _module).add("default", (function (param) {
          return React.createElement(ThemeContext$Nunes22Adaptflex.make, ThemeContext$Nunes22Adaptflex.makeProps(Theme$Nunes22Adaptflex.$$default, React.createElement(Button$Nunes22Adaptflex.make, {
                              children: "Hello bs-storybook!"
                            }), /* () */0));
        })).add("defaultDark", (function (param) {
        return React.createElement(ThemeContext$Nunes22Adaptflex.make, ThemeContext$Nunes22Adaptflex.makeProps(Theme$Nunes22Adaptflex.defaultDark, React.createElement(Button$Nunes22Adaptflex.make, {
                            children: "Hello bs-storybook!"
                          }), /* () */0));
      }));

export {
  _module ,
  
}
/* _module Not a pure module */
