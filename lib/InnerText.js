import React from "react";
import PropTypes from "prop-types";

function SubText(str, size, className) {
  const words = str.split(" ");
  const style = {
    fontSize: "50%"
  };
  let dy = "15%";
  const cmp = words.map(w => {
    const c = [];
    c.push(
      <tspan
        className={`${className}-subtext`}
        key={w}
        style={style}
        x={size / 2}
        dy={dy}
      >
        {w}
      </tspan>
    );
    dy = "10%";
    return c;
  });
  return cmp;
}
export default function InnerText(props) {
  const { title, className, size, data, active } = props;
  data[-1] = {
    name: title,
    value: data.length
  };

  const style = {
    width: "100%",
    fontSize: `${size / 5}px`
  };
  const style1 = {
    fontSize: "100%"
  };

  const subText = SubText(data[active].name, size, className);
  return (
    <text
      className={className}
      style={style}
      x={size / 2}
      y={size / 2}
      textAnchor="middle"
      dominantBaseline="ideographic"
    >
      <tspan className={`${className}-value`} style={style1} x={size / 2}>
        {data[active].value}
      </tspan>
      {subText}
    </text>
  );
}

InnerText.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number.isRequired
    })
  ).isRequired,
  active: PropTypes.number.isRequired
};
