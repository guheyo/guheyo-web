'use client';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CRUD } from '@/lib/crud/crud.types';
import { useState } from 'react';
import { IconButton } from '@mui/material';

export default function CommentMenu({
  isCurrentUser,
  editable,
  deletable,
  handleMenuClick,
}: {
  isCurrentUser: boolean;
  editable: boolean;
  deletable: boolean;
  handleMenuClick: (mode: CRUD) => void;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(null);
  };

  if (!isCurrentUser) return <div />;

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon className="text-xl md:text-2xl text-dark-200" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {isCurrentUser && (
          <>
            {editable && (
              <MenuItem onClick={() => handleMenuClick('update')}>
                수정
              </MenuItem>
            )}
            {deletable && (
              <MenuItem onClick={() => handleMenuClick('delete')}>
                삭제
              </MenuItem>
            )}
          </>
        )}
      </Menu>
    </div>
  );
}
