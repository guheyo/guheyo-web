import {
  UpdateDemandInput,
  UpdateOfferInput,
  UpdateSwapInput,
} from '@/generated/graphql';
import { DealFormValues } from './deal.interfaces';

const parseUpdateDealInput = ({
  dealFormValues,
}: {
  dealFormValues: DealFormValues;
}): UpdateOfferInput | UpdateDemandInput | UpdateSwapInput => {
  const input = {
    id: dealFormValues.id,
    productCategoryId: dealFormValues.categoryId,
    priceCurrency: 'krw',
    price: dealFormValues.price,
    source: dealFormValues.source,
  };

  if (dealFormValues.dealType === 'swap') {
    return {
      ...input,
      businessFunction: 'trade',
      name0: dealFormValues.name0,
      name1: dealFormValues.name1!,
      description0: dealFormValues.description,
    };
  }

  if (dealFormValues.dealType === 'offer') {
    return {
      ...input,
      businessFunction: 'sell',
      name: dealFormValues.name0,
      description: dealFormValues.description,
    };
  }

  return {
    ...input,
    businessFunction: 'buy',
    name: dealFormValues.name0,
    description: dealFormValues.description,
  };
};

export default parseUpdateDealInput;
