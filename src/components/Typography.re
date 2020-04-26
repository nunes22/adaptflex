module H1 = {
  [@react.component]
  let make = (~children) => {
    <h1> children </h1>;
  };
};