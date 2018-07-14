import React from "react";
import renderer from "react-test-renderer";
import Donut from "../lib/Donut";
import props from "./mock";

it("renders correctly", () => {
  const tree = renderer.create(<Donut {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
