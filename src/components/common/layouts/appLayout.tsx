import React from "react";
import styled, { css } from "styled-components";
import { LayoutProperties } from "../../../types/components/layoutProperties.type";

const AppLayout = ({ children, scroll }: LayoutProperties) => {
  return <Container scroll={scroll || false}>{children}</Container>;
};

export default AppLayout;

const Container = styled.div<{ scroll: boolean }>`
  width: 39rem;
  min-height: 100vh;

  padding: 6rem 0;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  ${({ scroll }) =>
    scroll
      ? css`
          align-items: flex-start;
        `
      : css`
          align-items: center;
        `}

  overflow-x: hidden;

  background-color: white;
`;
