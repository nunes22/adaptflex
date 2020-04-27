[@react.component]
let make =
    (
      ~children,
      ~href: string,
      ~size: Theme.size=Medium,
      ~variant: Theme.buttonVariant=Link,
    ) => {
  let theme = React.useContext(ThemeContext.themeContext);
  let styles = Theme.buttonStyles(~theme, ~variant, ~size);

  <a className=styles href> children </a>;
};