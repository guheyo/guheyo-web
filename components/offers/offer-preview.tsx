'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { truncateName } from '@/lib/formatter';
import { OfferPreviewFragment } from '@/generated/graphql';
import OfferDetail from './offer-detail';
import DealPreviewLayout from '../deals/deal-preview.layout';

interface Props {
  offer: OfferPreviewFragment;
  type: 'text' | 'thumbnail';
}

export default function OfferPreview({ offer, type }: Props) {
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
    <DealPreviewLayout
      type={type}
      thumbnail={offer.thumbnail}
      name={truncateName(offer.name, 45)}
      price={offer.price}
      createdAt={offer.createdAt}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      <OfferDetail slug={offer.slug!} />
    </DealPreviewLayout>
  );
}
