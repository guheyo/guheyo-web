import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useRouter } from 'next/navigation';
import { parseEditLink } from '@/lib/deal/parse-edit-link';
import { Deal, DealStatus } from '@/lib/deal/deal.types';
import { parseDealBumpLink } from '@/lib/deal/parse-deal-bump-link';
import { updateDeal } from '@/lib/api/deal';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { parseUpdateDealInput } from '@/lib/deal/parse-update-deal-input';

export default function PrivateDealMenu({
  dealType,
  dealId,
  authorId,
}: {
  dealType: Deal;
  dealId: string;
  authorId: string;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const device = useDeviceDetect();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(null);
  };

  const handleChangeDealStatus = async (
    event: React.MouseEvent<HTMLElement>,
    dealStatus: DealStatus,
  ) => {
    event.preventDefault();
    const updateDealInput = parseUpdateDealInput({
      dealType,
      input: {
        id: dealId,
        status: dealStatus,
        source: device,
      },
      authorId,
    });
    await updateDeal({
      dealType,
      updateDealInput,
    });
    location.reload();
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
        dealType,
        dealId,
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
        <MenuItem onClick={(e) => handleChangeDealStatus(e, 'open')}>
          거래 가능
        </MenuItem>
        <MenuItem onClick={(e) => handleChangeDealStatus(e, 'closed')}>
          거래 완료
        </MenuItem>
        <MenuItem onClick={handleEditClick}>게시글 수정</MenuItem>
        <MenuItem onClick={handleBumpClick}>끌어올리기</MenuItem>
      </Menu>
    </div>
  );
}
