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
  const sizes = 'w-full h-full';

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
          height: '100%',
          width: '100%',
          maxHeight: '100%',
          maxWidth: '64rem',
          boxShadow: '0',
          borderRadius: '0',
        },
      }}
    >
      <DialogContent
        className="p-0 overflow-auto md:overflow-hidden bg-dark text-light-white"
        sx={{
          padding: '0px 0px',
        }}
      >
        <div className="flex justify-end">
          <IconButton onClick={handleOpen}>
            <XMarkIcon className="w-6 md:w-8" color="white" />
          </IconButton>
        </div>

        <div className="md:flex md:flex-row justify-center gap-12">
          <div className="md:w-[50%]">
            <ImageSlider
              images={offer.images}
              sizes={sizes}
              width={760}
              height={760}
            />
          </div>
          <div className="flex-none line-break md:w-[50%]">
            <div className="py-2 font-medium">
              <div className="flex flex-row gap-2 text-sm md:text-base items-center pl-2">
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
              <div className="p-2 flex flex-col gap-2 mt-1">
                <div className="text-[18px] font-normal">{offer.name}</div>
                <div className="flex md:text-base justify-self-end mt-[4px] items-center mb-[16px]">
                  <span className="text-[18px] font-bold">
                    {getPrice(offer.price)}
                  </span>
                </div>
              </div>
              <div className="p-2 pt-4 text-sm md:text-base md:h-[30rem] overflow-y-auto">
                {offer.description && (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {offer.description}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
