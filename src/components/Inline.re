module Styles = {
  open Css;
  let container =
    style([
      display(inlineFlex),
      selector("> *", [marginRight(px(12))]),
      selector("> *:last-child", [marginRight(px(0))]),
    ]);
};
[@react.component]
let make = (~children) => {
  <div className=Styles.container> children </div>;
};