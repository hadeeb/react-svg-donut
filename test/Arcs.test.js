import React from "react";
import renderer from "react-test-renderer";
import Arcs from "../lib/Arcs";

it("renders correctly", () => {
  const tree = renderer.create(<Arcs />).toJSON();
  expect(tree).toMatchSnapshot();
});
