import React from "react";
import renderer from "react-test-renderer";
import Donut from "../lib/Donut";
import props from "./mock";

it("renders correctly with props", () => {
  const tree = renderer.create(<Donut {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders with warnings without props", () => {
  const tree = renderer.create(<Donut />).toJSON();
  expect(tree).toMatchSnapshot();
});
