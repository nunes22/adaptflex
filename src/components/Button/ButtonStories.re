open BsStorybook.Story;

let _module = [%bs.raw "module"];

storiesOf("My First Reason Story", _module)
->(
    add("first chapter", () =>
      <Button> "Hello bs-storybook!"->React.string </Button>
    )
  );