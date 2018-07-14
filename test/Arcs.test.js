import React from "react";
import renderer from "react-test-renderer";
import Arcs from "../lib/Arcs";
import props from "./mock";

it("renders correctly", () => {
  const tree = renderer.create(<Arcs {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
