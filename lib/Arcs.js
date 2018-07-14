import React, { Component } from "react";
import PropTypes from "prop-types";

import ArcPath from "./ArcPath";

function calculateTotal(items) {
  return items.reduce((sum, currItem) => sum + currItem.value, 0);
}

export default class Arcs extends Component {
  render() {
    const {
      size,
      data,
      active,
      onHover,
      className,
      colors,
      innerRadius,
      outerRadius,
      activeOffset
    } = this.props;
    let angle = 270;
    const total = calculateTotal(data);
    return (
      <g className={className}>
        {data.map((item, index) => {
          const { value } = item;
          const fill = colors[index % colors.length];
          const arcPath = (
            <ArcPath
              className={`${className}-arcpath-${index}`}
              size={size}
              item={item}
              index={index}
              key={item.name}
              innerRadius={innerRadius}
              outerRadius={
                index === active ? outerRadius + activeOffset : outerRadius
              }
              fill={fill}
              angle={angle}
              total={total}
              onMouseEnter={onHover}
            />
          );
          angle += (value / total) * 360;
          return arcPath;
        })}
      </g>
    );
  }
}

Arcs.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
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

Arcs.defaultProps = {
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
