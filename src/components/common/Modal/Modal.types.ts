export interface ModalStyleProps {
  background?: "none" | "clear";
}

export interface ModalProps extends ModalStyleProps {
  id: string;
  onUnmount?: VoidFunction;
  type?: "fade" | "bottom";
}
