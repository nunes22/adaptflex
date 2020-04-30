

import * as React from "react";

function Util$WithTestId(Props) {
  var id = Props.id;
  var children = Props.children;
  return React.cloneElement(children, {
              "data-testid": id
            });
}

var WithTestId = {
  make: Util$WithTestId
};

function createEventValue(value) {
  return {
          target: {
            value: value
          }
        };
}

var Testing = {
  createEventValue: createEventValue
};

function getNextId(param) {
  return new Date().getTime() | 0;
}

export {
  WithTestId ,
  Testing ,
  getNextId ,
  
}
/* react Not a pure module */
