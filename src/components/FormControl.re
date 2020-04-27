module Styles = {
  open Css;
  let container = style([marginBottom(24 |> px)]);
  let label = style([display(block)]);
};

[@react.component]
let make = (~label: string, ~type_, ~value=?, ~onChange=?) => {
  <div className=Styles.container>
    <label>
      <span className=Styles.label> label->React.string </span>
      <Input fullWidth=true type_ ?value ?onChange />
    </label>
  </div>;
};