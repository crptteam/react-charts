import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import Legend from "./graph/Legend";
import CustomTooltip from "./graph/CustomTooltip";

class Graph extends Component {
  state = {
    activeGraph: {}
  };

  static propTypes = {
    graph: PropTypes.array.isRequired,
    tooltipData: PropTypes.array.isRequired
  };

  static defaultProps = {
    graph: [],
    tooltipData: []
  };

  handlerData(props) {
    const activeGraph =
      props.graph &&
      props.graph.reduce((acc, el) => {
        acc[el.key] = {
          active: true
        };
        return acc;
      }, {});

    this.setState({
      activeGraph: activeGraph
    });
  }

  handlerClickLabel = keyLabel => {
    const toggle = this.state.activeGraph[keyLabel.key].active;
    this.props.getValueLabelClick(keyLabel);

    this.setState({
      activeGraph: {
        ...this.state.activeGraph,
        [keyLabel.key]: {
          active: !toggle
        }
      }
    });
  };

  componentDidMount() {
    this.handlerData(this.props);
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      this.handlerData(this.props);
    }
  }

  render() {
    const { graph, tooltipData } = this.props;
    const { activeGraph } = this.state;
    return (
      <div>
        <Legend
          graph={graph}
          activeGraph={activeGraph}
          handlerClickLabel={this.handlerClickLabel}
        />
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={tooltipData}>
            <CartesianGrid />
            {graph.map(el => {
              const { key } = el;
              const isActive = activeGraph[key] && activeGraph[key].active;
              return (
                <Line
                  svg={el.svg}
                  key={key}
                  type={el.type}
                  name={el.name}
                  dataKey={isActive ? key : `${key}_disabled`}
                  stroke={el.stroke}
                  strokeWidth={el.strokeWidth}
                  dot={false}
                  activeDot={el.activeDot}
                />
              );
            })}
            <YAxis fontFamily="sans-serif" fontSize="12" orientation="right" />
            <XAxis fontFamily="sans-serif" fontSize="12" dataKey="dt" />
            <Tooltip animationDuration={0} content={<CustomTooltip />} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Graph;
