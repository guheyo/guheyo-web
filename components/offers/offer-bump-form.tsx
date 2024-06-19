'use client';

import {
  FieldPath,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import {
  ABSOLUTE_SUBMIT_BUTTON_STYLE,
  DEFAULT_LABEL_STYLE,
} from '@/lib/input/input.styles';
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
import Image from 'next/image';
import { v4 as uuid4 } from 'uuid';
import { parseOfferBumpFormTitle } from '@/lib/offer/parse-offer-bump-form-title';
import { parseOfferPriceName } from '@/lib/offer/parse-offer-price-name';
import { BumpFormValues } from '@/lib/offer/offer.interfaces';
import { BusinessFunction } from '@/lib/offer/offer.types';
import {
  OFFER_BUMP_INFO_MESSAGE,
  OFFER_PRICE_REQUIRED_MESSAGE,
} from '@/lib/offer/offer.constants';
import { parseOfferBumpButtonName } from '@/lib/offer/parse-offer-bump-button-name';
import TextInput from '../inputs/text-input';
import DiscordLoginDialogButton from '../auth/discord-login-dialog-button';
import PriceUpDownButtons, {
  UP_DOWN_PRICE_UNIT,
} from './price-up-down-buttons';

export default function OfferBumpForm({
  businessFunction,
  offerId,
  title,
  price,
  thumbnail,
  bumpedAt,
  handleSubmitValid,
}: {
  businessFunction: BusinessFunction;
  offerId: string;
  title: string;
  price: number;
  thumbnail?: string;
  bumpedAt: Date;
  handleSubmitValid: SubmitHandler<BumpFormValues>;
}) {
  const device = useDeviceDetect();

  const { handleSubmit, control, setValue, getValues } =
    useForm<BumpFormValues>({
      defaultValues: {
        id: uuid4(),
        offerId,
        price,
      },
    });

  const onChangeNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(
      e.target.name as FieldPath<BumpFormValues>,
      parseInt(e.target.value, 10),
    );
  };

  const handleSubmitError: SubmitErrorHandler<BumpFormValues> = (
    errors,
    event,
  ) => {
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
      className="flex flex-col gap-12 w-full"
      onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}
    >
      <div className="text-base md:text-lg text-gray-300 font-bold">
        {parseOfferBumpFormTitle(businessFunction)}
      </div>
      <div className="flex flex-row gap-2 items-center">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            width={48}
            height={48}
            className="rounded"
          />
        ) : (
          <div />
        )}
        <div className="flex flex-col">
          <div className="text-sm text-gray-300">{title}</div>
          <div className="text-base text-gray-300 font-bold">{price}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-0 md:mb-8">
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
              name: parseOfferPriceName(businessFunction),
              style: DEFAULT_LABEL_STYLE,
            },
            onChange: onChangeNumberInput,
          }}
          textFieldProps={{
            type: 'number',
            variant: 'outlined',
            placeholder: parseOfferPriceName(businessFunction),
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
        <PriceUpDownButtons
          handleUpButtonClick={handleUpButtonClick}
          handleDownButtonClick={handleDownButtonClick}
        />
        <div className="text-base text-gray-300 font-bold">
          {OFFER_BUMP_INFO_MESSAGE}
        </div>
      </div>
      <div className={ABSOLUTE_SUBMIT_BUTTON_STYLE}>
        <DiscordLoginDialogButton
          name={parseOfferBumpButtonName(bumpedAt)}
          onAuthorization={handleAuthorization}
          onUnAuthorization={handleOnAuthorization}
        />
      </div>
    </form>
  );
}
