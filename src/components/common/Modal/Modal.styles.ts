import styled from "@emotion/styled";
import blackXIcon from "../../../assets/blackXIcon.svg";
import xIcon from "../../../assets/xIcon.svg";
import { fade, slideUp } from "../../../styles/animation";
import { flex, position, size } from "../../../styles/mixins";
import { colors } from "../../../styles/theme/colors";
import { zIndex } from "../../../styles/theme/zIndex";
import type { ModalStyleProps } from "./Modal.types";

export const Inner = styled.div<ModalStyleProps & { modalType?: "fade" | "bottom" }>`
  ${flex.center()}
  ${position.fixed({ top: 0, left: 0 })}
  ${size({ width: "100%", height: "100%" })}

  z-index: ${zIndex.modal};
  background-color: ${(props) =>
    props.modalType === "bottom" ? colors.white : colors.backgroundModal};
  backdrop-filter: blur(10px);
  animation: ${(props) => (props.modalType === "bottom" ? slideUp : fade)} 400ms;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const CloseButton = styled.button<{ modalType?: "fade" | "bottom" }>`
  position: absolute;
  top: 16px;
  right: 16px;
  background: url(${(props) => (props.modalType === "bottom" ? blackXIcon : xIcon)});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
