'use client';

import { Dialog, DialogContent, IconButton } from '@mui/material';
import dayjs from 'dayjs';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { isMobile } from 'react-device-detect';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { OfferResponse } from '@/generated/graphql';
import { getPrice } from '@/lib/formatter';
import UserProfile from '../users/user-profile';
import ImageSlider from '../base/image-slider';

export default function OfferDetail({
  offer,
  open,
  handleOpen,
}: {
  offer: OfferResponse;
  open: boolean;
  handleOpen: React.MouseEventHandler;
}) {
  const sizes = 'h-[360px] md:h-[524px]';

  return (
    <Dialog
      open={open}
      onClose={handleOpen}
      sx={{
        top: isMobile ? '0px' : '90px',
      }}
      className="max-w-screen z-50"
      slotProps={{
        backdrop: {
          sx: {
            background: '#292a2e',
            top: '56px',
          },
        },
      }}
      PaperProps={{
        sx: {
          overflow: 'unset',
          margin: 0,
          width: '100%',
          maxWidth: '64rem',
          height: '100%',
          maxHeight: '100%',
          boxShadow: '0',
          borderRadius: '0',
        },
      }}
    >
      <DialogContent className="p-0 overflow-auto md:overflow-hidden bg-dark-500 text-light-200">
        <div className="flex justify-end">
          <IconButton onClick={handleOpen}>
            <XMarkIcon className="w-6 md:w-8" color="white" />
          </IconButton>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-12">
          <div className="w-full md:w-[50%]">
            <ImageSlider images={offer.images} sizes={sizes} />
          </div>
          <div className="flex-none line-break w-full md:w-[50%] px-4 py-4 md:py-0">
            <div className="flex flex-row gap-2 md:gap-3 text-sm md:text-base items-center">
              <UserProfile
                user={offer.seller}
                displayAvatar
                displayUsername
                displayDM
                mode="standard"
              />
              <div className="justify-self-end text-[10px] md:text-xs text-gray-400">
                {dayjs(offer.createdAt).fromNow()}
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-4 mt-4 md:mt-6">
              <div className="text-lg md:text-xl font-semibold">
                {offer.name}
              </div>
              <div className="flex text-base md:text-lg justify-self-end mt-0 items-center mb-4 font-semibold">
                {getPrice(offer.price)}
              </div>
            </div>
            <div className="pt-4 text-base md:text-base md:h-[30rem] overflow-y-auto pb-20">
              {offer.description && (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {offer.description}
                </ReactMarkdown>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
