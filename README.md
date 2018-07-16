# React SVG Donut Chart

An SVG-based React pie/donut chart component.

[![NPM](https://nodei.co/npm/react-svg-donut.png)](https://nodei.co/npm/react-svg-donut/)

## Installation
Add `react-svg-donut` to your project from the NPM registry.

```shell
yarn add react-svg-donut
npm install react-svg-donut
```

## Demo
Visit [<b>GitHub page</b>][github-page]

## Usage

```js
import React from "react"
import DonutChart from "react-svg-donut"

const title="Movies"
const data = [
  {name: "Comedy", value: 4},
  {name: "Action", value: 5},
  {name: "Romance", value: 6},
  {name: "Drama", value: 1},
  {name: "SciFi", value: 4},
]

const MyComponent = () => (
  <DonutChart
    size={250}
    title={title}
    data={data}
    onHover={(i) => {
      if (i>=0) {
        console.log("Selected ", data[i].name)
      } else {
        console.log("Mouse left donut")
      }
    }
    innerRaduis={0.5}
    outerRadius={0.8}
    activeOffset={0.1}
  />
)
```

[github-page]: https://hadeeb.github.io/react-svg-donut
