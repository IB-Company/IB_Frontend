import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

export interface FlexProperties {
  children: ReactNode;
  gap?: CSSProperties["gap"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  restStyle?: CSSProperties;
}
