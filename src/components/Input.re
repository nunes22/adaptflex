[@react.component]
let make =
    (
      ~type_,
      ~fullWidth=false,
      ~value=?,
      ~onChange=?,
      ~placeholder=?,
      ~dataTestid=?,
    ) => {
  let theme = React.useContext(ThemeContext.themeContext);
  let input =
    <input
      className={Cn.make([
        Cn.ifTrue(Theme.fullWidth, fullWidth),
        Theme.inputStyles(theme),
      ])}
      type_
      ?placeholder
      ?value
      ?onChange
    />;

  switch (dataTestid) {
  | None => input
  | Some(testId) => <Util.WithTestId id=testId> input </Util.WithTestId>
  };
};