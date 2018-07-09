import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { PercentBar } from "@crpt/react-percent-bar";

const PrecentBar = ({ precentBar }) =>
  precentBar.map((el, i) => {
    const { name, cnt, percent, childs } = el;
    return (
      <Wrap key={i}>
        <PercentBar
          title={name}
          value={percent}
          count={cnt}
          values={
            childs
              ? childs.map(v => {
                  return {
                    title: v.name,
                    count: v.cnt,
                    percent: v.percent
                  };
                })
              : null
          }
        />
      </Wrap>
    );
  });

export default PrecentBar;

PrecentBar.propTypes = {
  precentBar: PropTypes.array
};

PrecentBar.defaultProps = {
  precentBar: []
};

const Wrap = styled.div`
  margin: 0 0 10px 0;

  &:nth-last-child(1) {
    margin: 0;
  }
`;
