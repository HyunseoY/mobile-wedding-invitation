import { useEffect, type MouseEvent, type PropsWithChildren } from 'react';
import { useModal } from './Modal.hooks';
import * as Styled from './Modal.styles';
import type { ModalProps } from './Modal.types';

export const Modal = ({
  id,
  children,
  type = 'fade',
}: PropsWithChildren<ModalProps>) => {
  const { unmount } = useModal();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = ({
    target,
    currentTarget,
  }: MouseEvent<HTMLButtonElement>) => {
    if (target !== currentTarget) return;
    unmount(id);
  };

  return (
    <Styled.Inner modalType={type}>
      <Styled.CloseButton modalType={type} onClick={handleClose} />
      {children}
    </Styled.Inner>
  );
};
