import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { usePathname, useRouter } from 'next/navigation';
import { OFFER_OPEN, OFFER_CLOSED, OFFER } from '@/lib/offer/offer.constants';
import { parseOfferStatusLabel } from '@/lib/offer/parse-offer-status-label';
import { deleteOffer, findOfferPreview, updateOffer } from '@/lib/api/offer';
import { BusinessFunction, OfferStatus } from '@/lib/offer/offer.types';
import { parseOfferLink } from '@/lib/offer/parse-offer-link';
import { IconButton } from '@mui/material';
import { updateCacheWithDeletedOffer } from '@/lib/apollo/cache/offer';
import { parseMarketLink } from '@/lib/offer/parse-market-link';
import { parseUrlSegments } from '@/lib/group/parse-url-segments';
import PostDeleteDialog from '../posts/post-delete-dialog';
import BgDialog from '../base/bg-dialog';

export default function PrivateOfferMenu({
  offerId,
  offerStatus,
  businessFunction,
  archivedAt,
}: {
  offerId: string;
  offerStatus: OfferStatus;
  businessFunction: BusinessFunction;
  archivedAt?: Date;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertText, setAlertText] = React.useState('');
  const router = useRouter();
  const pathname = usePathname();
  const { channelSlug, identifier } = parseUrlSegments(pathname);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(null);
    setOpenAlert(false);
  };

  const handleChangeOfferStatus = async (
    event: React.MouseEvent<HTMLElement>,
    newOfferStatus: OfferStatus,
  ) => {
    event.preventDefault();
    setAnchorEl(null);
    await updateOffer({
      id: offerId,
      status: newOfferStatus,
      post: {},
    });
    await findOfferPreview(offerId);

    setAlertText(
      `${parseOfferStatusLabel(newOfferStatus)} 상태로 변경되었어요!`,
    );
    setOpenAlert(true);
  };

  const handleHidden = async (
    event: React.MouseEvent<HTMLElement>,
    isArchived: boolean,
  ) => {
    event.preventDefault();
    setAnchorEl(null);
    await updateOffer({
      id: offerId,
      post: {
        archivedAt: isArchived ? new Date() : null,
      },
    });
    await findOfferPreview(offerId);

    setAlertText(
      `${isArchived ? '거래글이 보관되었어요!' : '거래글을 꺼냈어요!'}`,
    );
    setOpenAlert(true);
  };

  const handleEditClick: React.MouseEventHandler = (event) => {
    event.preventDefault();
    setAnchorEl(null);
    router.push(
      parseOfferLink({
        action: 'edit',
        offerId,
      }),
    );
  };

  const handleBumpClick: React.MouseEventHandler = async (event) => {
    event.preventDefault();
    setAnchorEl(null);
    router.push(
      parseOfferLink({
        action: 'bump',
        offerId,
      }),
    );
  };

  const handleDelete: React.MouseEventHandler = async (event) => {
    event.preventDefault();
    setAnchorEl(null);
    await deleteOffer(offerId);
    updateCacheWithDeletedOffer(offerId);

    if (channelSlug === OFFER && identifier) {
      router.push(
        parseMarketLink({
          businessFunction,
        }),
      );
    }

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
        {!archivedAt && offerStatus === OFFER_OPEN && (
          <MenuItem onClick={handleBumpClick} sx={{ justifyContent: 'center' }}>
            끌올
          </MenuItem>
        )}
        {!archivedAt && offerStatus === OFFER_CLOSED && (
          <MenuItem
            onClick={(e) => handleChangeOfferStatus(e, OFFER_OPEN)}
            sx={{ justifyContent: 'center' }}
          >
            거래 가능
          </MenuItem>
        )}
        {!archivedAt && offerStatus === OFFER_OPEN && (
          <MenuItem
            onClick={(e) => handleChangeOfferStatus(e, OFFER_CLOSED)}
            sx={{ justifyContent: 'center' }}
          >
            거래 완료
          </MenuItem>
        )}
        {!archivedAt && (
          <MenuItem
            onClick={(e) => handleHidden(e, true)}
            sx={{ justifyContent: 'center' }}
          >
            보관
          </MenuItem>
        )}
        {archivedAt && (
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
      <BgDialog
        open={openAlert}
        title="안내"
        content={alertText}
        closeButtonName="확인"
        onClose={handleClose}
      />
    </div>
  );
}
