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
  const { length } = data;
  const total = data.reduce((sum, currItem) => sum + currItem.value, 0);
  const newData = data.map(d => {
    let percent = (d.value * 100) / total;
    percent = `${Math.round(percent)}%`;
    return { name: d.name, value: percent };
  });
  newData[-1] = {
    name: title,
    value: length
  };

  const style = {
    fontSize: `${size / 5}px`
  };
  const style1 = {
    fontSize: "90%"
  };
  const subText = SubText(newData[active % length].name, size, className);
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
        {newData[active % length].value}
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
