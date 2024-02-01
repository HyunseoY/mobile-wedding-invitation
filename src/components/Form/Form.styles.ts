import styled from "@emotion/styled";
import { flex } from "../../styles/mixins";
import { colors } from "../../styles/theme/colors";

export const Container = styled.div`
  ${flex.column({ align: "center", justify: "center" })}

  width: 100%;
  max-width: 425px;
`;

export const Line = styled.span`
  display: block;
  width: 80%;
  border-top: 0.5px solid ${colors.gray4};
  margin: 20px 0;
`;

export const Dott = styled.p`
  width: 5px;
  height: 5px;
  background-color: ${colors.red};
  border-radius: 50%;
  margin: 2px 0 0 3px;
`;

export const ItemBox = styled.div`
  width: 80%;
  padding: 20px 0;
  border-bottom: 0.5px solid ${colors.gray4};
`;

export const Input = styled.input`
  width: 200px;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const TextArea = styled.textarea`
  width: 200px;
  height: 140px;
  border: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const SubmitButton = styled.button`
  ${flex.center()}

  width: 80%;
  border: 1px solid ${colors.gray};
  padding: 5%;
  margin: 5vh;
  color: ${colors.white};
  background-color: ${colors.realBlack};
`;
