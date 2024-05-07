import React from "react";
import { TextProperties } from "../../../types/ui/textProperties.type";
import styled from "styled-components";

const Text = ({
  color = "black",
  fontSize = "1.6rem",
  fontWeight = "400",
  children,
  ...restStyle
}: TextProperties) => {
  return (
    <Container style={{ fontSize, fontWeight, color, ...restStyle }}>
      {children}
    </Container>
  );
};

export default Text;

const Container = styled.div``;
