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
import { MouseEventHandler, useContext, useEffect } from 'react';
import Image from 'next/image';
import { parseDealBumpFormTitle } from '@/lib/deal/parse-deal-bump-form-title';
import { DealBumpValues } from '@/lib/deal/deal.interfaces';
import { useRouter } from 'next/navigation';
import { parseGroupMarketLink } from '@/lib/deal/parse-group-market-link';
import { Deal } from '@/lib/deal/deal.types';
import { parseDealBumpButtonName } from '@/lib/deal/parse-deal-bump-button-name';
import { validateBump } from '@/lib/deal/validate-bump';
import TextInput from '../inputs/text-input';
import { AuthContext } from '../auth/auth.provider';
import DiscordLoginDialog from '../auth/discord-login-dialog';
import PriceUpDownButtons, {
  UP_DOWN_PRICE_UNIT,
} from './price-up-down-buttons';

export default function DealBumpForm({
  dealType,
  dealId,
  dealName,
  groupSlug,
  price,
  thumbnail,
  bumpedAt,
  submitValidCallback,
}: {
  dealType: Deal;
  dealId: string;
  dealName: string;
  groupSlug: string;
  price: number;
  thumbnail?: UserImageResponse;
  bumpedAt: Date;
  submitValidCallback: SubmitHandler<DealBumpValues>;
}) {
  const { user } = useContext(AuthContext);
  const device = useDeviceDetect();
  const router = useRouter();

  const { handleSubmit, control, setValue, getValues } =
    useForm<DealBumpValues>({
      defaultValues: {
        dealId,
        userId: '',
        price,
      },
    });

  useEffect(() => {
    if (!user) return;

    setValue('userId', user.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onChangeNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(
      e.target.name as FieldPath<DealBumpValues>,
      parseInt(e.target.value, 10),
    );
  };

  const handleSubmitValid: SubmitHandler<DealBumpValues> = async (data) => {
    if (!user) return;
    if (!validateBump(bumpedAt)) return;

    await submitValidCallback(data);
    router.push(`${parseGroupMarketLink({ groupSlug, dealType })}`);
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
