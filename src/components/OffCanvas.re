module Styles = {
  open Css;
  let container =
    style([
      position(fixed),
      zIndex(1),
      backgroundColor(Css.hex("444")),
      padding(px(24)),
      maxWidth(px(500)),
      top(px(58)),
      bottom(zero),
      right(zero),
      transform(translateX(pct(100.))),
      transition(
        ~duration=330,
        ~timingFunction=cubicBezier(0.18, 0.8, 0.44, 1.0),
        "all",
      ),
    ]);
  let isOpen = style([transform(translateX(zero))]);
};

[@react.component]
let make = (~children, ~isOpen: bool, ~trigger) => {
  <div>
    trigger
    <div
      className={Cn.make([
        Styles.container,
        Cn.ifTrue(Styles.isOpen, isOpen),
      ])}>
      children
    </div>
  </div>;
};