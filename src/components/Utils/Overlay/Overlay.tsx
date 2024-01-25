import { Fragment } from 'react';
import { useOverlayStore } from '../../../overlay.store';

export const Overlay = () => {
  const overlays = useOverlayStore((state) => state.overlays);

  return (
    <Fragment>
      {[...overlays.entries()].map(([id, element]) => (
        <Fragment key={id}>{element}</Fragment>
      ))}
    </Fragment>
  );
};
