import { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
 elem?: HTMLElement;
}

export const Portal: FC<PortalProps> = ({
  elem = document.body,
  children,
}) => createPortal(children, elem);
