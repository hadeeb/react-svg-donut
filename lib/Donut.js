import React, { Component } from "react";
import PropTypes from "prop-types";

import Arcs from "./Arcs";
import InnerText from "./InnerText";

export default class Donut extends Component {
  constructor(props) {
    super(props);
    const { active } = props;
    this.state = {
      active
    };
    this.mouseHoverHandler = this.mouseHoverHandler.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const str = JSON.stringify;
    if (
      str(this.props) !== str(nextProps) ||
      str(this.state) !== str(nextState)
    )
      return true;
    return false;
  }

  componentDidUpdate() {
    const { onHover } = this.props;
    const { active } = this.state;
    onHover(active);
  }

  mouseHoverHandler(item) {
    const { active } = this.state;
    if (active !== item) {
      this.setState({ active: item });
    }
  }

  render() {
    const {
      title,
      size,
      className,
      data,
      colors,
      innerRadius,
      outerRadius,
      activeOffset
    } = this.props;
    const { active } = this.state;
    return (
      <svg
        className={className}
        style={{ width: `${size}px`, height: `${size}px` }}
        viewBox={`0 0 ${size} ${size}`}
      >
        <Arcs
          size={size}
          data={data}
          active={active}
          onHover={this.mouseHoverHandler}
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
          data={data}
          active={active}
        />
      </svg>
    );
  }
}

Donut.propTypes = {
  title: PropTypes.string,
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
  colors: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
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
