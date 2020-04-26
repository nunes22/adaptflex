module Styles = {
  open Css;
  let container =
    style([
      position(relative),
      selector(
        "> *:first-child",
        [borderTopRightRadius(zero), borderBottomRightRadius(zero)],
      ),
      selector(
        "> *:last-child",
        [
          position(absolute),
          right(zero),
          flexShrink(0.),
          borderTopLeftRadius(zero),
          borderBottomLeftRadius(zero),
        ],
      ),
    ]);
};
[@react.component]
let make = (~children, ~onSubmit) => {
  <form className=Styles.container onSubmit> children </form>;
};