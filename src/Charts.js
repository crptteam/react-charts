import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Card, CardLine } from "@crpt/react-card";
import { Container, Column } from "@crpt/react-page-layout";

import Graph from "./containers/Graph";
import PrecentBar from "./containers/PrecentBar";

const Charts = props => {
  const validateData = data => (Array.isArray(data) ? data : []);

  const { title, description, getValueLabelClick } = props;
  let { graph, tooltipData, precentBar } = props;
  graph = validateData(graph);
  tooltipData = validateData(tooltipData);
  precentBar = validateData(precentBar).length ? precentBar : undefined;

  return (
    <CardLine>
      <Card>
        {title && (
          <CardLine>
            <Title>{title}</Title>
          </CardLine>
        )}
        <Container gutter={16} justify="stretch">
          <Column col={16}>
            <Graph
              graph={graph}
              tooltipData={tooltipData}
              getValueLabelClick={getValueLabelClick}
            />
          </Column>
          <Column col={8}>
            {description && <Description>{description}</Description>}
            {precentBar && <PrecentBar precentBar={precentBar} />}
          </Column>
        </Container>
      </Card>
    </CardLine>
  );
};

export default Charts;

Charts.defaultProps = {
  getValueLabelClick: () => {},
  title: "",
  description: "",
  precentBar: [],
  child: null,
  tooltipData: [],
  graph: []
};

Charts.propTypes = {
  getValueLabelClick: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  precentBar: PropTypes.array,
  child: PropTypes.any,
  tooltipData: PropTypes.array.isRequired,
  graph: PropTypes.array.isRequired
};

const Description = styled.span`
  font-size: 11px;
  line-height: 1.45;
  color: #abadb6;
  margin: 10px 0px 30px 0px;
  display: block;
`;

const Title = styled.h4`
  padding: 15px 10px 0px 0px;
  background-color: white;
  font-size: 18px;
  margin: 0;
  font-weight: normal;
`;
