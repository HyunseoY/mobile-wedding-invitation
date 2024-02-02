import styled from "@emotion/styled";
import blackXIcon from "../../assets/blackXIcon.svg";
import { flex } from "../../styles/mixins";
import { colors } from "../../styles/theme/colors";

export const Container = styled.div`
  ${flex.column({ align: "center" })}

  margin-bottom: 15vh;
`;

export const CommentWrapper = styled.ul`
  ${flex.column({ gap: 5, marginTop: 35 })}

  width: 80%;
`;

export const CommentBox = styled.li`
  ${flex.column({ gap: 10 })}

  padding: 15px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 1px 1px 2px rgb(0 0 0/5%);

  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
`;

export const DeleteButton = styled.button`
  width: 18px;
  height: 18px;
  background: url(${blackXIcon});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  cursor: pointer;
`;
