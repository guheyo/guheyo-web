'use client';

import useClickOutside from '@/app/hooks/use-click-outside';
import { Fade, Popper as MUIPopper } from '@mui/material';
import { PopperProps as MUIPopperProps } from '@mui/material/Popper';
import { useRef } from 'react';

interface PopperProps extends MUIPopperProps {
  handler: () => void;
  delay?: number;
  children: React.ReactNode;
}
export default function Popper({
  open,
  anchorEl,
  handler,
  placement = 'bottom-start',
  delay = 350,
  children,
}: PopperProps) {
  const popperRef = useRef(null);

  useClickOutside(popperRef, handler);

  return (
    <MUIPopper
      ref={popperRef}
      open={open}
      anchorEl={anchorEl}
      placement={placement}
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={delay}>
          <div>{children}</div>
        </Fade>
      )}
    </MUIPopper>
  );
}
