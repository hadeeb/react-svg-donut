import { render } from "react-dom";
import React, { Component } from "react";
import Donut from "../lib/Donut";

class Example extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onHover(item) {
    const { active } = this.state;
    if (active !== item)
      this.setState({
        active: item
      });
  }

  render() {
    const data = [
      { name: "Cash", value: 12480 },
      { name: "Card", value: 10520 },
      { name: "Coupon", value: 39300 },
      { name: "e-Wallet", value: 9410 },
      { name: "Store Credit", value: 9410 }
    ];
    const { active } = this.state;
    const props = {
      size: 500,
      onHover: this.onHover.bind(this),
      title: "Sales Channels",
      active,
      data
    };
    return (
      <div>
        <Donut {...props} />
        <div>
          {data.map((item, index) => (
            <div
              key={item.name}
              onMouseEnter={() => this.onHover(index)}
              onMouseLeave={() => this.onHover(-1)}
            >
              {item.name}
            </div>
          ))}
          Active :
          {active >= 0 ? data[active].name : "none"}
        </div>
      </div>
    );
  }
}
render(<Example />, document.getElementById("root"));
