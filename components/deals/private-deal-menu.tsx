import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/navigation';
import { parseEditLink } from '@/lib/deal/parse-edit-link';
import { Deal } from '@/lib/deal/deal.types';

export default function PrivateDealMenu({
  dealType,
  dealId,
  groupSlug,
}: {
  dealType: Deal;
  dealId: string;
  groupSlug: string;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    router.push(
      parseEditLink({
        groupSlug,
        dealType,
        id: dealId,
      }),
    );
  };

  const handleBumpClick = () => {
    // TODO
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon className="text-xl md:text-2xl text-light-200" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleEditClick}>게시글 수정</MenuItem>
        <MenuItem onClick={handleBumpClick}>끌어올리기</MenuItem>
      </Menu>
    </div>
  );
}
