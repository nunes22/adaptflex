open BsStorybook.Story;

let _module = [%bs.raw "module"];

storiesOf("Button", _module)
->(
    add("default", () =>
    <ThemeContext value=Theme.default>
      <Button> "Hello bs-storybook!"->React.string </Button>
      </ThemeContext>
    )
  )->(
    add("defaultDark", () => 
    <ThemeContext value=Theme.defaultDark>
      <Button> "Hello bs-storybook!"->React.string </Button>
      </ThemeContext>
    )
  );