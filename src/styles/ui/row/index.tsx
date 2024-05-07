import styled from "styled-components";
import { FlexProperties } from "../../../types/ui/flexProperties.type";

export const Row = ({
  gap = "0",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  restStyle,
  children
}: FlexProperties) => {
  return (
    <Container style={{ gap, justifyContent, alignItems, ...restStyle }}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
