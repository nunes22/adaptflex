module WithTestId = {
  [@react.component]
  let make = (~id: string, ~children) =>
    ReasonReact.cloneElement(children, ~props={"data-testid": id}, [||]);
};

module Testing = {
  let createEventValue = value => {
    "target": {
      "value": value,
    },
  };
};

/**
  This is a sample function that is being documented.
  */
let getNextId = () => Js.Date.make() |> Js.Date.getTime |> int_of_float;