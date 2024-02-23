'use client';

import { UserImageResponse } from '@/generated/graphql';
import DealThumbnailPreviewLayout from './deal-thumbnail-preview.layout';
import DealTextPreviewLayout from './deal-text-preview.layout';

interface Props {
  type: 'text' | 'thumbnail';
  thumbnail?: UserImageResponse | null;
  name: any;
  price: number;
  createdAt: Date;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  children: React.ReactNode;
}

export default function DealPreviewLayout({
  type,
  thumbnail,
  name,
  price,
  createdAt,
  open,
  handleOpen,
  handleClose,
  children,
}: Props) {
  switch (type) {
    case 'text': {
      return (
        <DealTextPreviewLayout
          name={name}
          price={price}
          createdAt={createdAt}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        >
          {children}
        </DealTextPreviewLayout>
      );
    }
    case 'thumbnail': {
      return (
        <DealThumbnailPreviewLayout
          thumbnail={thumbnail}
          name={name}
          price={price}
          createdAt={createdAt}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        >
          {children}
        </DealThumbnailPreviewLayout>
      );
    }
    default: {
      return <div />;
    }
  }
}
