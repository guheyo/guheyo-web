'use client';

import { BumpOfferInput, useFindOfferQuery } from '@/generated/graphql';
import { FieldPath, SubmitErrorHandler, useForm } from 'react-hook-form';
import {
  DEAL_BUMP_INFO_MESSAGE,
  DEAL_BUMP_SUBMIT_BUTTON_NAME,
  DEAL_PRICE_LABEL_NAME,
  DEAL_PRICE_PLACEHOLDER,
  DEAL_PRICE_REQUIRED_MESSAGE,
} from '@/lib/deal/deal.constants';
import {
  DEFAULT_LABEL_STYLE,
  DEFAULT_SUBMIT_BUTTON_STYLE,
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
import { bumpOffer } from '@/lib/api/offer';
import { v4 as uuid4 } from 'uuid';
import { parseDealBumpFormTitle } from '@/lib/deal/parse-deal-bump-form-title';
import { DealBumpValues } from '@/lib/deal/deal.interfaces';
import TextInput from '../inputs/text-input';
import { AuthContext } from '../auth/auth.provider';
import DiscordLoginDialog from '../auth/discord-login-dialog';

export default function OfferBump({ slug }: { slug: string }) {
  const { user } = useContext(AuthContext);
  const device = useDeviceDetect();

  const { loading, data } = useFindOfferQuery({
    variables: {
      slug: decodeURI(slug),
    },
  });
  const offer = data?.findOffer;

  const { handleSubmit, control, watch, setValue } = useForm<DealBumpValues>({
    defaultValues: {
      dealId: '',
      userId: '',
      price: 0,
    },
  });

  const dealId = watch('dealId');
  const price = watch('price');

  useEffect(() => {
    if (!offer || !user) return;

    setValue('dealId', offer.id);
    setValue('userId', user.id);
    setValue('price', offer.price);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offer, user]);

  if (loading) return <div />;
  if (!offer) return <div />;

  const onChangeNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(
      e.target.name as FieldPath<DealBumpValues>,
      parseInt(e.target.value, 10),
    );
  };

  const handleOnSubmit = async () => {
    if (!user) return;

    const input: BumpOfferInput = {
      id: uuid4(),
      offerId: dealId,
      sellerId: user.id,
      newPrice: price,
    };
    try {
      await bumpOffer(input);
    } catch (e: any) {
      // TODO handle error
    }
  };

  const handleOnSubmitError: SubmitErrorHandler<DealBumpValues> = (errors, event) => {
    // TODO
  };

  const handleOnAuthorization: MouseEventHandler = () => {
    // Do nothing
  };

  const handleOnUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  const thumbnail = offer.images[0];

  return (
    <form
      className="flex flex-col gap-12"
      onSubmit={handleSubmit(handleOnSubmit, handleOnSubmitError)}
    >
      <div className="text-xl text-light-200 font-bold">
        {parseDealBumpFormTitle('offer')}
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Image
          src={thumbnail.url}
          alt={thumbnail.name}
          width={48}
          height={48}
          className="rounded"
        />
        <div className="flex flex-col">
          <div className="text-sm text-light-200">{offer.name}</div>
          <div className="text-base text-light-200 font-bold">
            {offer.price}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
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
        <div className="text-base text-light-200 font-bold">
          {DEAL_BUMP_INFO_MESSAGE}
        </div>
      </div>
      <div className={DEFAULT_SUBMIT_BUTTON_STYLE}>
        <DiscordLoginDialog
          name={DEAL_BUMP_SUBMIT_BUTTON_NAME}
          onAuthorization={handleOnAuthorization}
          onUnAuthorization={handleOnUnAuthorization}
        />
      </div>
    </form>
  );
}
