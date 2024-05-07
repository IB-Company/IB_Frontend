import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

export interface TextProperties {
  color?: CSSProperties["color"];
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
  restStyle?: CSSProperties;
  children: ReactNode;
}
