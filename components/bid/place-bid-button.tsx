'use client';

import {
  FieldPath,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { DEFAULT_LABEL_STYLE } from '@/lib/input/input.styles';
import {
  DEFAULT_INPUT_TEXT_BACKGROUND_COLOR,
  DEFAULT_INPUT_TEXT_COLOR,
} from '@/lib/input/input.colors';
import {
  getInputTextFontSize,
  getInputTextMinWidth,
} from '@/lib/input/input.props';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { MouseEventHandler, WheelEventHandler } from 'react';
import { v4 as uuid4 } from 'uuid';
import { OFFER_PRICE_REQUIRED_MESSAGE } from '@/lib/offer/offer.constants';
import { BidValues } from '@/lib/bid/bid.types';
import { PLACE_BID_BUTTON_STYLE } from '@/lib/bid/bid.styles';
import TextInput from '../inputs/text-input';
import DiscordLoginDialog from '../auth/discord-login-dialog';
import PriceUpDownButtons, {
  UP_DOWN_PRICE_UNIT,
} from '../offers/price-up-down-buttons';

export default function PlaceBidButton({
  price,
  handleSubmitValid,
}: {
  price: number;
  handleSubmitValid: SubmitHandler<BidValues>;
}) {
  const device = useDeviceDetect();

  const { handleSubmit, control, setValue, getValues } = useForm<BidValues>({
    defaultValues: {
      id: uuid4(),
      price,
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

  return (
    <form
      className="flex flex-col gap-0"
      onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}
    >
      <div className="flex flex-col gap-2 mb-0 md:mb-8">
        <div className="w-full">
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
              label: {
                name: '입찰',
                style: DEFAULT_LABEL_STYLE,
              },
              onChange: onChangeNumberInput,
            }}
            textFieldProps={{
              type: 'number',
              variant: 'outlined',
              placeholder: '입찰 금액',
              InputProps: {
                startAdornment: <div className="pr-2">₩</div>,
                sx: {
                  color: DEFAULT_INPUT_TEXT_COLOR,
                  borderRadius: 2,
                  fontSize: getInputTextFontSize(device),
                  backgroundColor: DEFAULT_INPUT_TEXT_BACKGROUND_COLOR,
                  fontWeight: 600,
                  minWidth: getInputTextMinWidth(device),
                },
              },
              onWheel: handleWheel,
            }}
          />
        </div>
        <div className="flex justify-between">
          <PriceUpDownButtons
            handleUpButtonClick={handleUpButtonClick}
            handleDownButtonClick={handleDownButtonClick}
          />
          <div className={PLACE_BID_BUTTON_STYLE}>
            <DiscordLoginDialog
              name="입찰하기"
              onAuthorization={handleAuthorization}
              onUnAuthorization={handleOnAuthorization}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
