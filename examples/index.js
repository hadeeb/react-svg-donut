import { render } from "react-dom";
import React, { Component } from "react";
import Donut from "../lib/Donut";

class Example extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onHover(item) {
    this.setState({
      active: item
    });
  }

  render() {
    const data = [
      { name: "Cash", value: 12480 },
      { name: "Card", value: 10520 },
      { name: "Coupon", value: 39300 },
      { name: "Paytm", value: 9410 },
      { name: "Store Credit", value: 9410 }
    ];
    const props = {
      size: 1000,
      onHover: this.onHover.bind(this),
      data
    };
    const { active } = this.state;
    return (
      <div>
        <Donut {...props} />
        Active :
        {active >= 0 ? data[active].name : "none"}
      </div>
    );
  }
}
render(<Example />, document.getElementById("root"));
