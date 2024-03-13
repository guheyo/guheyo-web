import {
  UpdateDemandInput,
  UpdateOfferInput,
  UpdateSwapInput,
} from '@/generated/graphql';
import { DealFormValues } from './deal.interfaces';
import { Deal } from './deal.types';

export const parseUpdateDealInputFromFormValues = ({
  authorId,
  dealFormValues,
}: {
  authorId: string;
  dealFormValues: DealFormValues;
}): UpdateOfferInput | UpdateDemandInput | UpdateSwapInput => {
  const input = {
    id: dealFormValues.id,
    productCategoryId: dealFormValues.productCategoryId,
    priceCurrency: 'krw',
    price: dealFormValues.price,
    source: dealFormValues.source,
  };

  if (dealFormValues.dealType === 'swap') {
    return {
      ...input,
      businessFunction: 'trade',
      proposerId: authorId,
      name0: dealFormValues.name0,
      name1: dealFormValues.name1!,
      description0: dealFormValues.description,
    };
  }

  if (dealFormValues.dealType === 'offer') {
    return {
      ...input,
      businessFunction: 'sell',
      sellerId: authorId,
      name: dealFormValues.name0,
      description: dealFormValues.description,
    };
  }

  return {
    ...input,
    businessFunction: 'buy',
    buyerId: authorId,
    name: dealFormValues.name0,
    description: dealFormValues.description,
  };
};

export const parseUpdateDealInput = ({
  dealType,
  input,
  authorId,
}: {
  dealType: Deal;
  authorId: string;
  input:
    | Omit<UpdateOfferInput, 'sellerId'>
    | Omit<UpdateDemandInput, 'buyerId'>
    | Omit<UpdateSwapInput, 'proposerId'>;
}) => {
  if (dealType === 'offer')
    return {
      ...input,
      sellerId: authorId,
    } as UpdateOfferInput;
  if (dealType === 'demand')
    return {
      ...input,
      buyerId: authorId,
    } as UpdateDemandInput;
  return {
    ...input,
    proposerId: authorId,
  } as UpdateSwapInput;
};
