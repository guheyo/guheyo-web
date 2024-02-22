'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DemandPreviewFragment } from '@/generated/graphql';
import DemandDetail from './demand-detail';
import DealTextPreview from '../deals/deal-text-preview.layout';

interface Props {
  demand: DemandPreviewFragment;
}

export default function DemandTextPreview({ demand }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    window.history.pushState(
      {},
      ``,
      `/user/${demand.buyer.username}/demands/${demand.slug}`,
    );
  };

  const handleClose = () => {
    setOpen(!open);
    router.back();
  };

  return (
    <DealTextPreview
      name={demand.name}
      price={demand.price}
      createdAt={demand.createdAt}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      <DemandDetail slug={demand.slug!} />
    </DealTextPreview>
  );
}
