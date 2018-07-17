import React from "react";
import PropTypes from "prop-types";
import path from "./path";

export default function ArcPath(props) {
  const {
    size,
    angle,
    total,
    fill,
    item,
    index,
    className,
    innerRadius,
    outerRadius,
    onMouseEnter
  } = props;
  const { value } = item;
  const activeAngle =
    Number.isNaN(value / total) || total / value === 1
      ? 359.99
      : (value / total) * 360;
  const d = path(activeAngle, angle, size, innerRadius, outerRadius);
  return (
    <path
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseEnter(-1)}
      className={className}
      d={d}
      fill={fill}
    />
  );
}

ArcPath.propTypes = {
  size: PropTypes.number.isRequired,
  angle: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  fill: PropTypes.string,
  item: PropTypes.shape({ name: PropTypes.string, value: PropTypes.number })
    .isRequired,
  index: PropTypes.number,
  className: PropTypes.string,
  onMouseEnter: PropTypes.func,
  innerRadius: PropTypes.number.isRequired,
  outerRadius: PropTypes.number.isRequired
};

ArcPath.defaultProps = {
  fill: "#ff0000",
  index: 0,
  className: "donut-chart-arcpath-0",
  // eslint-disable-next-line
  onMouseEnter: index => console.log("Hover", index)
};
