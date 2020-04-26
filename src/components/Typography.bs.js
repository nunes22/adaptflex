'use strict';

var React = require("react");

function Typography$H1(Props) {
  var children = Props.children;
  return React.createElement("h1", undefined, children);
}

var H1 = {
  make: Typography$H1
};

exports.H1 = H1;
/* react Not a pure module */
