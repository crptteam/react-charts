import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Legend = ({ graph, activeGraph, handlerClickLabel }) => (
  <Wrap>
    {graph.map(el => {
      const { key, name, stroke, svg } = el;
      const isActive = activeGraph[key] && activeGraph[key].active;
      return (
        <CircleItem
          onClick={() => {
            handlerClickLabel({ key, name });
          }}
          key={key}
          isActive={isActive}
          color={stroke}
          svg={svg}
        >
          {svg ? svg : name || ""}
        </CircleItem>
      );
    })}
  </Wrap>
);

export default Legend;

Legend.propTypes = {
  graph: PropTypes.array.isRequired,
  activeGraph: PropTypes.object.isRequired,
  handlerClickLabel: PropTypes.func.isRequired
};

const Wrap = styled.div`
  margin: 0 0 10px 0;
`;

const CircleItem = styled.span`
  display: inline-block;
  border-radius: 30px;
  background: ${({ isActive, color }) =>
    isActive ? color || "#e6e6e6" : "#e6e6e6"};
  padding: ${({ svg }) => (svg ? "6px" : "0 15px")};
  height: 30px;
  margin-right: 4px;
  line-height: 30px;
  font-size: 11px;
  font-family: SegoeUI;
  color: #fff;
  cursor: pointer;
  vertical-align: bottom;
  box-sizing: border-box;

  > svg {
    height: 100%;
  }
`;
