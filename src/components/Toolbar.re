[@react.component]
let make = (~title, ~onChangeTheme) => {
  let theme = React.useContext(ThemeContext.themeContext);
  let (isOpen, setOpen) = React.useState(_ => false);

  let titleStyles =
    Css.(
      style([
        fontSize(px(theme.typography.large)),
        color(Css.hex(theme.colors.cardBackground)),
      ])
    );

  <div className={Theme.toolbarStyles(theme)}>
    <h1 className=titleStyles> title->React.string </h1>
    <OffCanvas
      trigger={
        <Button
          variant=Ghost size=Small onClick={_ => setOpen(current => !current)}>
          {js|🍔|js}->React.string
        </Button>
      }
      isOpen>
      <div>
        <Button onClick={_ => onChangeTheme(Theme.default)}>
          "Default"->React.string
        </Button>
        <Button onClick={_ => onChangeTheme(Theme.defaultDark)}>
          "Default Dark"->React.string
        </Button>
        <Button onClick={_ => onChangeTheme(Theme.rainbow)}>
          "Rainbow"->React.string
        </Button>
        <Button onClick={_ => onChangeTheme(Theme.rainbowDark)}>
          "Rainbow Dark"->React.string
        </Button>
      </div>
    </OffCanvas>
  </div>;
};