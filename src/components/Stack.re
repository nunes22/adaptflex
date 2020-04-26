module Styles = {
  open Css;
  let container =
    style([
      selector("> *", [marginBottom(px(24))]),
      selector("> *:last-child", [marginBottom(px(0))]),
    ]);
};
[@react.component]
let make = (~children) => {
  <div className=Styles.container> children </div>;
};