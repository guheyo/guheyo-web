'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SwapPreviewFragment } from '@/generated/graphql';
import SwapDetail from './swap-detail';
import SwapName from './swap-name';
import DealPreviewLayout from '../deals/deal-preview.layout';

interface Props {
  swap: SwapPreviewFragment;
  type: 'text' | 'thumbnail';
}

export default function SwapPreview({ swap, type }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    window.history.pushState(
      {},
      ``,
      `/user/${swap.proposer.username}/swaps/${swap.slug}`,
    );
  };

  const handleClose = () => {
    setOpen(!open);
    router.back();
  };

  return (
    <DealPreviewLayout
      type={type}
      thumbnail={swap.thumbnail}
      name={<SwapName name0={swap.name0} name1={swap.name1} />}
      price={swap.price}
      createdAt={swap.createdAt}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      <SwapDetail slug={swap.slug!} />
    </DealPreviewLayout>
  );
}
