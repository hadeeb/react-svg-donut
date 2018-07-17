import React from "react";
import PropTypes from "prop-types";

import Arcs from "./Arcs";
import InnerText from "./InnerText";

export default function Donut(props) {
  const {
    title,
    size,
    className,
    data,
    colors,
    innerRadius,
    outerRadius,
    activeOffset,
    onHover,
    active
  } = props;
  const newData =
    data && data !== "undefined"
      ? data
      : [{ name: "invalid-values", value: 100 }];
  return (
    <svg
      className={className}
      style={{ width: `${size}px`, height: `${size}px` }}
      viewBox={`0 0 ${size} ${size}`}
    >
      <Arcs
        size={size}
        data={newData}
        active={active}
        onHover={onHover}
        className={`${className}-arcs`}
        colors={colors}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        activeOffset={activeOffset}
      />
      <InnerText
        title={title}
        size={size}
        className={`${className}-text`}
        data={newData}
        active={active}
      />
    </svg>
  );
}

Donut.propTypes = {
  title: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired,
  active: PropTypes.number,
  onHover: PropTypes.func,
  colors: PropTypes.arrayOf(PropTypes.string),
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  activeOffset: PropTypes.number
};

Donut.defaultProps = {
  title: "Donut Slices",
  size: 500,
  className: "donut-chart",
  colors: [
    "rgb(51, 102, 204)",
    "rgb(220, 57, 18)",
    "rgb(255, 153, 0)",
    "rgb(16, 150, 24)",
    "rgb(153, 0, 153)"
  ],
  active: -1,
  // eslint-disable-next-line
  onHover: item => console.log("Hover", item),
  innerRadius: 0.65,
  outerRadius: 0.95,
  activeOffset: 0.05
};
