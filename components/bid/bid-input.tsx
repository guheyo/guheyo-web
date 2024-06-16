'use client';

import {
  FieldPath,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { DEFAULT_INPUT_TEXT_COLOR } from '@/lib/input/input.colors';
import { getInputTextFontSize } from '@/lib/input/input.props';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { MouseEventHandler, WheelEventHandler } from 'react';
import { v4 as uuid4 } from 'uuid';
import { OFFER_PRICE_REQUIRED_MESSAGE } from '@/lib/offer/offer.constants';
import { BidValues } from '@/lib/bid/bid.types';
import { AuthorResponse } from '@/generated/graphql';
import { roundDownToNearest5000 } from '@/lib/price/round-down-to-nearest-5000';
import TextInput from '../inputs/text-input';
import DiscordLoginDialogButton from '../auth/discord-login-dialog-button';
import { UP_DOWN_PRICE_UNIT } from '../offers/price-up-down-buttons';
import Avatar from '../avatar/avatar';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import PriceUpDownIconButtons from '../offers/price-up-down-icon-buttons';
import NextBidPriceButton from './next-bid-price-button';

export default function BidInput({
  user,
  currentBidPrice,
  handlePlaceBid,
}: {
  user?: AuthorResponse;
  currentBidPrice: number;
  handlePlaceBid: (values: BidValues) => void;
}) {
  const device = useDeviceDetect();

  const { handleSubmit, control, setValue, getValues, reset } =
    useForm<BidValues>({
      defaultValues: {
        id: '',
        price: 0,
      },
    });

  const onChangeNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(
      e.target.name as FieldPath<BidValues>,
      parseInt(e.target.value, 10),
    );
  };

  const handleSubmitError: SubmitErrorHandler<BidValues> = (errors, event) => {
    // TODO
  };

  const handleAuthorization: MouseEventHandler = () => {
    // Do nothing
  };

  const handleOnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  const handleNextBidPriceButtonClick = (nextBidPrice: number) => {
    setValue('price', nextBidPrice);
  };

  const handleUpButtonClick: MouseEventHandler = (e) => {
    const currentPrice = getValues('price');
    setValue('price', currentPrice + UP_DOWN_PRICE_UNIT);
  };

  const handleDownButtonClick: MouseEventHandler = (e) => {
    const currentPrice = getValues('price');
    setValue('price', currentPrice - UP_DOWN_PRICE_UNIT);
  };

  const handleWheel: WheelEventHandler = (e) => {
    (e.target as HTMLElement).blur();
  };

  const handleSubmitValid: SubmitHandler<BidValues> = (values) => {
    const roundedPrice = roundDownToNearest5000(values.price);

    handlePlaceBid({
      ...values,
      id: uuid4(),
      price: roundedPrice,
    });
    reset({
      id: '',
      price: 0,
    });
  };

  return (
    <div className="flex flex-row gap-4 items-center">
      {!user ? (
        <Avatar
          name="guest"
          fontSize={device === 'mobile' ? 'text-sm' : 'text-base'}
        />
      ) : (
        <UserProfileRedirectButton
          user={user}
          displayAvatar
          displayUsername={false}
          fontSize={device === 'mobile' ? 'text-sm' : 'text-base'}
        />
      )}
      <form
        onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}
        className="w-full flex flex-row gap-2 items-center"
      >
        <div className="flex-grow">
          <TextInput
            name="price"
            control={control}
            rules={{
              required: OFFER_PRICE_REQUIRED_MESSAGE,
              pattern: {
                value: /^\d+$/,
                message: OFFER_PRICE_REQUIRED_MESSAGE,
              },
            }}
            textInputProps={{
              onChange: onChangeNumberInput,
            }}
            textFieldProps={{
              type: 'number',
              variant: 'standard',
              placeholder: '입찰 금액',
              InputProps: {
                startAdornment: <div className="pr-2">₩</div>,
                sx: {
                  color: DEFAULT_INPUT_TEXT_COLOR,
                  fontSize: getInputTextFontSize(device),
                  fontWeight: 600,
                },
              },
              onWheel: handleWheel,
            }}
          />
        </div>
        <div className="flex-none">
          <NextBidPriceButton
            currentBidPrice={currentBidPrice}
            handleButtonClick={handleNextBidPriceButtonClick}
          />
        </div>
        <div className="flex-none">
          <PriceUpDownIconButtons
            handleUpButtonClick={handleUpButtonClick}
            handleDownButtonClick={handleDownButtonClick}
          />
        </div>
        <div className="flex-none">
          <DiscordLoginDialogButton
            icon={
              <div className="bg-star-500 text-gray-300 hover:text-gray-200 rounded-lg text-xs md:text-sm p-2 font-semibold">
                입찰
              </div>
            }
            onAuthorization={handleAuthorization}
            onUnAuthorization={handleOnAuthorization}
          />
        </div>
      </form>
    </div>
  );
}
