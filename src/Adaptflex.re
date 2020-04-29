include Card;
include Button;
/**
  This is a sample function that is being documented.
  */
module Foo = {
  [@react.component]
  let make = () => "Hi"->React.string;
};

include Foo;