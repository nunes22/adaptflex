module Styles = {
  open Css;
  let container =
    style([
      display(inlineFlex),
      selector("> div", [paddingRight(px(12))]),
      selector("> div:last-child", [paddingRight(px(0))]),
    ]);
};
[@react.component]
let make = (~children) => {
  <div className=Styles.container> children </div>;
};