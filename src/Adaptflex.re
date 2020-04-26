include Card;
include Button;

module Foo = {
  [@react.component]
  let make = () => "Hi"->React.string;
};

include Foo;