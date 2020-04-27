module Styles = {
  Theme.globalStyles(Theme.default);
};

[@react.component]
let make = () => {
  <div>
    <Typography.H1> "Button"->React.string </Typography.H1>
    <Button> "Button"->React.string </Button>
    <Typography.H1> "Button Variant"->React.string </Typography.H1>
    <Button variant=Primary> "Primary Button"->React.string </Button>
    <Button variant=Secondary> "Secondary Button"->React.string </Button>
    <Button variant=Ghost> "Ghost Button"->React.string </Button>
    <Typography.H1> "Button Size"->React.string </Typography.H1>
    <Button size=Small> "Small Button"->React.string </Button>
    <Button size=Medium> "Button"->React.string </Button>
    <Button size=Large> "Large Button"->React.string </Button>
    <hr />
    <Typography.H1> "Card"->React.string </Typography.H1>
    <Card> "Card"->React.string </Card>
    <hr />
    <Typography.H1> "Inline"->React.string </Typography.H1>
    <Inline>
      <Button> "Hi 1"->React.string </Button>
      <Button> "Hi 2"->React.string </Button>
    </Inline>
    <hr />
    <Typography.H1> "InlineForm"->React.string </Typography.H1>
    <div> "TBD"->React.string </div>
    <hr />
    <Typography.H1> "Input"->React.string </Typography.H1>
    <Input type_="text" value="Foo" />
    <hr />
    <Typography.H1> "FormControl"->React.string </Typography.H1>
    <div> "TBD"->React.string </div>
    <hr />
    <Typography.H1> "OffCanvas"->React.string </Typography.H1>
    <div> "TBD"->React.string </div>
    <hr />
    <Typography.H1> "Stack"->React.string </Typography.H1>
    <div> "TBD"->React.string </div>
    <Typography.H1> "Toolbar"->React.string </Typography.H1>
    <div> "TBD"->React.string </div>
    <Typography.H1> "Typography"->React.string </Typography.H1>
    <div> "TBD"->React.string </div>
  </div>;
};