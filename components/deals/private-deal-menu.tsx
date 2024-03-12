import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useRouter } from 'next/navigation';
import { parseEditLink } from '@/lib/deal/parse-edit-link';
import { Deal } from '@/lib/deal/deal.types';
import { parseDealBumpLink } from '@/lib/deal/parse-deal-bump-link';

export default function PrivateDealMenu({
  dealType,
  dealId,
  username,
  slug,
}: {
  dealType: Deal;
  dealId: string;
  username: string;
  slug: string;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

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
      parseEditLink({
        dealType,
        id: dealId,
      }),
    );
  };

  const handleBumpClick: React.MouseEventHandler = async (event) => {
    event.preventDefault();
    router.push(
      parseDealBumpLink({
        username,
        dealType,
        slug,
      }),
    );
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
        <MoreHorizIcon className="text-xl md:text-2xl text-light-200" />
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
