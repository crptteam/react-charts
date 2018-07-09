# react-charts

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

# charts

charts component. Wrap recharts components. C

## Usage

```javascript
import { Charts } from  "@crpt/react-rharts";

<Charts
	getValueLabelClick={val => {
		console.log("val: ", val);
	}}
	title={'title'}
	description={'description'}
	precentBar={precentBar}
	tooltipData={tooltipData}
	graph={graph}
/>

const tooltipData = [
  { dt: "2018-06-23", box: 5, blk: 12 },
  { dt: "2018-06-25", box: 15, blk: 2 }
]

const graph = [
	{
    type: "natural",
    name: "Блок",
    key: "blk",
    stroke: "#fc7752",
    strokeWidth: 2,
    activeDot: { stroke: "#1a99f4", strokeWidth: 0, r: 5 }
	},
	{
    svg: (
      <svg viewBox="0 0 409.6 405.76" fill={"black"}>
        <path
          d="M682.8,396.06c50.72,0,91.84-48.13,91.84-107.49,0-82.33-41.12-107.49-91.84-107.49S591,206.24,591,288.57c0,59.36,41.12,107.49,91.84,107.49Zm0,0"
          transform="translate(-478 -181.08)"
        />
        <path
          d="M885.6,554.28,839.27,449.9a23.3,23.3,0,0,0-10.48-11.15l-71.91-37.43a4.66,4.66,0,0,0-4.93.41,113.41,113.41,0,0,1-138.3,0,4.67,4.67,0,0,0-4.94-.41l-71.9,37.43a23.24,23.24,0,0,0-10.47,11.15L480,554.28a23.16,23.16,0,0,0,21.18,32.56H864.42a23.17,23.17,0,0,0,21.18-32.56Zm0,0"
          transform="translate(-478 -181.08)"
        />
      </svg>
    ),
    type: "monotone",
    name: "Короб",
    key: "box",
    stroke: "#f6cc6b",
    strokeWidth: 2,
    activeDot: { stroke: "#1a99f4", strokeWidth: 0, r: 5 }
  },
],

const precentBar = [
  { name: "Реализованные", cnt: 0, percent: 0 },
  { name: "В обороте", cnt: 10, percent: 58.8 },
  {
    name: "Списанные",
    cnt: 54,
    percent: 317.6,
    childs: [
      { name: "Порча товара", cnt: 0, percent: 0 },
      { name: "Хищение товара", cnt: 0, percent: 0 },
      { name: "Отбор контрольных образцов", cnt: 0, percent: 0 },
      {
        name: "Демонстрация на выставках и ярмарках",
        cnt: 0,
        percent: 0
      },
      { name: "Иное", cnt: 54, percent: 317.6 }
    ]
  }
];
```

### Form

| PropName                      | Description                                                          | Example                                                                                                                                                                     |
| ----------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tooltipData: Array (Required) | tooltip data.                                                        | `<Charts tooltipData={[ { dt: "2018-06-23" name1: 5, name2: 12 }, { dt: "2018-06-25", name1: 15, name2: 2 }]}`                                                              |
| graph: Array (Required)       | graph configuration.                                                 | `<Charts graph={[ { type: "monotone", name: "Короб", key: "name1", stroke: "#f6cc6b", strokeWidth: 2, activeDot: { stroke: "#1a99f4", strokeWidth: 0, r: 5 }}]}`            |
| precentBar: Array             | precentBar configuration.                                            | `<Charts precentBar={[ { name: "Реализованные", cnt: 0, percent: 0 }, { name: "В обороте", cnt: 10, percent: 58.8, childs: [{ name: "Иное", cnt: 54, percent: 317.6 }] }]}` |
| description: String           | description.                                                         | `<Charts description={'description'}/>`                                                                                                                                     |
| title: String                 | title.                                                               | `<Charts description={'title'}/>`                                                                                                                                           |
| getValueLabelClick: Function  | Callback for label click return `{ key: keyLabel, name: nameLabel}`. | `<Charts getValueLabelClick={'val => {console.log("val: ", val);}}/>`                                                                                                       |

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
