import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/navigation';
import { IconButton } from '@mui/material';
import { deleteThread } from '@/lib/api/thread';
import { parseThreadLink } from '@/lib/thread/parse-thread-link';
import { ThreadResponse } from '@/generated/graphql';
import PostDeleteDialog from '../posts/post-delete-dialog';
import AlertDialog from '../base/alert-dialog';

export default function PrivateThreadMenu({
  thread,
}: {
  thread: ThreadResponse;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertText, setAlertText] = React.useState('');
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(null);
    setOpenAlert(false);
  };

  const handleEditClick: React.MouseEventHandler = (event) => {
    event.preventDefault();
    router.push(
      parseThreadLink({
        action: 'edit',
        thread,
      }),
    );
  };

  const handleDelete: React.MouseEventHandler = async (event) => {
    event.preventDefault();
    await deleteThread(thread.id);
    setAlertText('삭제되었어요!');
    setOpenAlert(true);
  };

  return (
    <div>
      <IconButton
        type="button"
        aria-label="private offer menu button"
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
        <MenuItem onClick={handleEditClick} sx={{ justifyContent: 'center' }}>
          글 수정
        </MenuItem>
        <MenuItem sx={{ justifyContent: 'center' }}>
          <PostDeleteDialog handleDelete={handleDelete} />
        </MenuItem>
      </Menu>
      <AlertDialog
        open={openAlert}
        text={alertText}
        handleClose={handleClose}
      />
    </div>
  );
}
