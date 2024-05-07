import React from "react";
import styled from "styled-components";
import { LayoutProperties } from "../../../types/components/layoutProperties.type";

const HeaderLayout = ({ children }: LayoutProperties) => {
  return <Container>{children}</Container>;
};

export default HeaderLayout;

const Container = styled.div`
  width: 39rem;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: white;

  box-sizing: border-box;

  box-shadow: 0 0.4rem 0.6rem #eeeeee;
`;
