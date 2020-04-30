module Styles = {
  open Css;
  let card = style([top(px(100))]);
};
[@react.component]
let make = (~children, ~fullScreen=false, ~className=() => "") => {
  let theme = React.useContext(ThemeContext.themeContext);
  let styles = Theme.cardStyles(theme);
  <div
    className={Cn.make([
      styles,
      Cn.ifTrue(Theme.fullScreen(theme), fullScreen),
      className(),
    ])}>
    children
  </div>;
};