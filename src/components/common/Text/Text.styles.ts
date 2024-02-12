import styled from "@emotion/styled";
import { colors } from "../../../styles/theme/colors";
import { TextProps } from "./Text.types";

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize || "1rem"};
  color: ${(props) => (props.color ? colors[props.color] : "#585858")};
  letter-spacing: ${(props) => props.letterSpacing || "normal"};
  margin-left: ${(props) => props.margin || "none"};

  line-height: 1.2em;
`;
