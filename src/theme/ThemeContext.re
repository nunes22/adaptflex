let themeContext = React.createContext(Theme.default);

let makeProps = (~value, ~children, ()) => {
  "value": value,
  "children": children,
};

let make = React.Context.provider(themeContext);