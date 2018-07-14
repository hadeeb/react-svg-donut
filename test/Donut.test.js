import React from "react";
import renderer from "react-test-renderer";
import Donut from "../lib/Donut";

it("renders correctly", () => {
  const tree = renderer.create(<Donut />).toJSON();
  expect(tree).toMatchSnapshot();
});
