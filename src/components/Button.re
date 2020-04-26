[@react.component]
let make =
    (
      ~children,
      ~onClick=?,
      ~type_=?,
      ~dataTestid=?,
      ~size: Theme.size=Medium,
      ~variant: Theme.buttonVariant=Default,
      ~className=?,
    ) => {
  let theme = React.useContext(ThemeContext.themeContext);
  let styles = Theme.buttonStyles(~theme, ~variant, ~size);
  let button =
    <button
      className={Cn.make([styles, Cn.mapSome(className, c => c)])}
      ?type_
      ?onClick>
      children
    </button>;

  switch (dataTestid) {
  | None => button
  | Some(testId) => <Util.WithTestId id=testId> button </Util.WithTestId>
  };
};