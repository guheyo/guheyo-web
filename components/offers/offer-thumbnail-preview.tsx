'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { truncateName } from '@/lib/formatter';
import { OfferPreviewFragment } from '@/generated/graphql';
import OfferDetail from './offer-detail';
import DealThumbnailPreviewLayout from '../deals/deal-thumbnail-preview.layout';

interface Props {
  offer: OfferPreviewFragment;
}

export default function OfferThumbnailPreview({ offer }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    window.history.pushState(
      {},
      '',
      `/user/${offer.seller.username}/offers/${offer.slug}`,
    );
  };

  const handleClose = () => {
    setOpen(!open);
    router.back();
  };

  return (
    <DealThumbnailPreviewLayout
      thumbnail={offer.thumbnail}
      name={truncateName(offer.name, 45)}
      price={offer.price}
      createdAt={offer.createdAt}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      <OfferDetail slug={offer.slug!} />
    </DealThumbnailPreviewLayout>
  );
}
