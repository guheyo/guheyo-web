'use client';

import { UserImageResponse } from '@/generated/graphql';
import {
  FieldPath,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import {
  DEAL_BUMP_INFO_MESSAGE,
  DEAL_PRICE_LABEL_NAME,
  DEAL_PRICE_PLACEHOLDER,
  DEAL_PRICE_REQUIRED_MESSAGE,
} from '@/lib/deal/deal.constants';
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
import { MouseEventHandler } from 'react';
import Image from 'next/image';
import { v4 as uuid4 } from 'uuid';
import { parseDealBumpFormTitle } from '@/lib/deal/parse-deal-bump-form-title';
import { DealBumpValues } from '@/lib/deal/deal.interfaces';
import { Deal } from '@/lib/deal/deal.types';
import { parseDealBumpButtonName } from '@/lib/deal/parse-deal-bump-button-name';
import TextInput from '../inputs/text-input';
import DiscordLoginDialog from '../auth/discord-login-dialog';
import PriceUpDownButtons, {
  UP_DOWN_PRICE_UNIT,
} from './price-up-down-buttons';

export default function DealBumpForm({
  dealType,
  dealId,
  dealName,
  price,
  thumbnail,
  bumpedAt,
  handleSubmitValid,
}: {
  dealType: Deal;
  dealId: string;
  dealName: string;
  price: number;
  thumbnail?: UserImageResponse;
  bumpedAt: Date;
  handleSubmitValid: SubmitHandler<DealBumpValues>;
}) {
  const device = useDeviceDetect();

  const { handleSubmit, control, setValue, getValues } =
    useForm<DealBumpValues>({
      defaultValues: {
        id: uuid4(),
        dealId,
        price,
      },
    });

  const onChangeNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(
      e.target.name as FieldPath<DealBumpValues>,
      parseInt(e.target.value, 10),
    );
  };

  const handleSubmitError: SubmitErrorHandler<DealBumpValues> = (errors, event) => {
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

  return (
    <form
      className="flex flex-col gap-12"
      onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}
    >
      <div className="text-xl text-light-200 font-bold">
        {parseDealBumpFormTitle(dealType)}
      </div>
      <div className="flex flex-row gap-2 items-center">
        {thumbnail?.url ? (
          <Image
            src={thumbnail.url}
            alt={thumbnail.name}
            width={48}
            height={48}
            className="rounded"
          />
        ) : (
          <div />
        )}
        <div className="flex flex-col">
          <div className="text-sm text-light-200">{dealName}</div>
          <div className="text-base text-light-200 font-bold">{price}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 md-0 md:mb-8">
        <TextInput
          name="price"
          control={control}
          rules={{
            required: DEAL_PRICE_REQUIRED_MESSAGE,
            pattern: {
              value: /^\d+$/,
              message: DEAL_PRICE_REQUIRED_MESSAGE,
            },
          }}
          textInputProps={{
            label: {
              name: DEAL_PRICE_LABEL_NAME,
              style: DEFAULT_LABEL_STYLE,
            },
            onChange: onChangeNumberInput,
          }}
          textFieldProps={{
            type: 'number',
            variant: 'outlined',
            placeholder: DEAL_PRICE_PLACEHOLDER,
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
          }}
        />
        <PriceUpDownButtons
          handleUpButtonClick={handleUpButtonClick}
          handleDownButtonClick={handleDownButtonClick}
        />
        <div className="text-base text-light-200 font-bold">
          {DEAL_BUMP_INFO_MESSAGE}
        </div>
      </div>

      <div className={ABSOLUTE_SUBMIT_BUTTON_STYLE}>
        <DiscordLoginDialog
          name={parseDealBumpButtonName(bumpedAt)}
          onAuthorization={handleAuthorization}
          onUnAuthorization={handleOnAuthorization}
        />
      </div>
    </form>
  );
}
