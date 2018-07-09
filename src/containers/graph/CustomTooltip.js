import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CustomTooltip = ({ label, payload }) => {
  const addSpacesBetweenThousands = val => {
    const str = String(val).split(".");
    const cel = str[0];
    const points = str[1];

    return (
      cel
        .split("")
        .reverse()
        .map((v, i) => ((i + 1) % 3 ? v : " " + v))
        .reverse()
        .join("") + (points ? "," + points : "")
    ).trim();
  };

  return (
    <Container>
      <Label>{label}</Label>
      {payload &&
        payload.map((el, i) => {
          const { color, value } = el;
          return color.length === 7 ? (
            <InfoItem key={i}>
              <LineCircleColor bgColor={color} />
              {addSpacesBetweenThousands(value)} шт
            </InfoItem>
          ) : null;
        })}
    </Container>
  );
};

export default CustomTooltip;

CustomTooltip.propTypes = {
  label: PropTypes.string,
  payload: PropTypes.array
};

const Container = styled.span`
  display: block;
  background: #212c42;
  color: #fff;
  font-family: SegoeUI;
  padding: 0px 20px 5px 9px;
  border-radius: 3px;
`;

const Label = styled.span`
  font-size: 9px;
  color: #abadb6;
`;

const InfoItem = styled.span`
  color: #fff;
  font-size: 12px;
  display: block;
`;

const LineCircleColor = styled.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 10px;
  margin-right: 5px;
  background: ${({ bgColor }) => (bgColor ? `${bgColor}` : "")};
`;
