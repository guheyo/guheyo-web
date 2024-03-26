import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/navigation';
import { Deal, DealStatus } from '@/lib/deal/deal.types';
import { deleteDeal, updateDeal } from '@/lib/api/deal';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { parseUpdateDealInput } from '@/lib/deal/parse-update-deal-input';
import { parseDealLink } from '@/lib/deal/parse-deal-link';
import { DEAL_CLOSED, DEAL_OPEN } from '@/lib/deal/deal.constants';
import PostDeleteDialog from '../posts/post-delete-dialog';

export default function PrivateDealMenu({
  dealType,
  dealId,
  authorId,
  status,
  hidden,
}: {
  dealType: Deal;
  dealId: string;
  authorId: string;
  status: DealStatus;
  hidden: boolean;
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
  };

  const handleHidden = async (
    event: React.MouseEvent<HTMLElement>,
    newHidden: boolean,
  ) => {
    event.preventDefault();
    const updateDealInput = parseUpdateDealInput({
      dealType,
      input: {
        id: dealId,
        hidden: newHidden,
        source: device,
      },
      authorId,
    });
    await updateDeal({
      dealType,
      updateDealInput,
    });
  };

  const handleEditClick: React.MouseEventHandler = (event) => {
    event.preventDefault();
    router.push(
      parseDealLink({
        action: 'edit',
        dealType,
        dealId,
      }),
    );
  };

  const handleBumpClick: React.MouseEventHandler = async (event) => {
    event.preventDefault();
    router.push(
      parseDealLink({
        action: 'bump',
        dealType,
        dealId,
      }),
    );
  };

  const handleDelete: React.MouseEventHandler = async (event) => {
    event.preventDefault();
    await deleteDeal({
      dealType,
      id: dealId,
      authorId,
    });
    router.back();
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
        <MoreVertIcon className="text-xl md:text-2xl text-dark-200" />
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
        <MenuItem onClick={handleEditClick} sx={{ justifyContent: 'center' }}>
          글 수정
        </MenuItem>
        {!hidden && status === DEAL_OPEN && (
          <MenuItem onClick={handleBumpClick} sx={{ justifyContent: 'center' }}>
            끌올
          </MenuItem>
        )}
        {!hidden && status === DEAL_CLOSED && (
          <MenuItem
            onClick={(e) => handleChangeDealStatus(e, DEAL_OPEN)}
            sx={{ justifyContent: 'center' }}
          >
            거래 가능
          </MenuItem>
        )}
        {!hidden && status === DEAL_OPEN && (
          <MenuItem
            onClick={(e) => handleChangeDealStatus(e, DEAL_CLOSED)}
            sx={{ justifyContent: 'center' }}
          >
            거래 완료
          </MenuItem>
        )}
        {!hidden && (
          <MenuItem
            onClick={(e) => handleHidden(e, true)}
            sx={{ justifyContent: 'center' }}
          >
            보관
          </MenuItem>
        )}
        {hidden && (
          <MenuItem
            onClick={(e) => handleHidden(e, false)}
            sx={{ justifyContent: 'center' }}
          >
            꺼내기
          </MenuItem>
        )}
        <MenuItem sx={{ justifyContent: 'center' }}>
          <PostDeleteDialog handleDelete={handleDelete} />
        </MenuItem>
      </Menu>
    </div>
  );
}
