'use strict';

var React = require("react");
var Theme$Nunes22Adaptflex = require("../theme/Theme.bs.js");
var ThemeContext$Nunes22Adaptflex = require("../theme/ThemeContext.bs.js");

function Link(Props) {
  var children = Props.children;
  var href = Props.href;
  var sizeOpt = Props.size;
  var variantOpt = Props.variant;
  var size = sizeOpt !== undefined ? sizeOpt : /* Medium */1;
  var variant = variantOpt !== undefined ? variantOpt : /* Link */4;
  var theme = React.useContext(ThemeContext$Nunes22Adaptflex.themeContext);
  var styles = Theme$Nunes22Adaptflex.buttonStyles(theme, variant, size);
  return React.createElement("a", {
              className: styles,
              href: href
            }, children);
}

var make = Link;

exports.make = make;
/* react Not a pure module */
