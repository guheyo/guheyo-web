'use client';

import { Fade, Popper as MUIPopper } from '@mui/material';
import { PopperProps as MUIPopperProps } from '@mui/material/Popper';
import { useRef } from 'react';
import useClickOutside from '@/hooks/use-click-outside';

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
      sx={{
        zIndex: 1300,
      }}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={delay}>
          <div>{children}</div>
        </Fade>
      )}
    </MUIPopper>
  );
}
