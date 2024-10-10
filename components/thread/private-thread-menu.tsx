import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { usePathname, useRouter } from 'next/navigation';
import { IconButton } from '@mui/material';
import { deleteThread } from '@/lib/api/thread';
import { parseThreadLink } from '@/lib/thread/parse-thread-link';
import { parseUrlSegments } from '@/lib/group/parse-url-segments';
import { updateCacheWithDeleteThread } from '@/lib/apollo/cache/thread';
import { THREAD } from '@/lib/thread/thread.constants';
import { parseChannelLink } from '@/lib/channel/parse-channel-link';
import PostDeleteDialog from '../posts/post-delete-dialog';

export default function PrivateThreadMenu({
  threadId,
  groupId,
  categoryType,
}: {
  threadId: string;
  groupId: string;
  categoryType: string;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const pathname = usePathname();
  const { groupSlug, channelSlug, identifier } = parseUrlSegments(pathname);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(null);
  };

  const handleEditClick: React.MouseEventHandler = (event) => {
    event.preventDefault();
    router.push(
      parseThreadLink({
        action: 'edit',
        threadId,
        groupId,
      }),
    );
  };

  const handleDelete: React.MouseEventHandler = async (event) => {
    event.preventDefault();
    await deleteThread(threadId);
    updateCacheWithDeleteThread(threadId);
    setAnchorEl(null);

    if (channelSlug === THREAD && identifier) {
      router.push(
        parseChannelLink({
          groupSlug,
          channelSlug: categoryType,
        }),
      );
    }
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
    </div>
  );
}
