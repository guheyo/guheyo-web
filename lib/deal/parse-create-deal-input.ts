import {
  CreateDemandInput,
  CreateOfferInput,
  CreateSwapInput,
} from '@/generated/graphql';
import { DealFormValues } from './deal.interfaces';

const parseCreateDealInput = ({
  dealFormValues,
}: {
  dealFormValues: DealFormValues;
}): CreateOfferInput | CreateDemandInput | CreateSwapInput => {
  const input = {
    id: dealFormValues.id,
    groupId: dealFormValues.groupId,
    productCategoryId: dealFormValues.categoryId,
    priceCurrency: 'krw',
    price: dealFormValues.price,
    source: dealFormValues.source,
  };

  if (dealFormValues.dealType === 'swap') {
    return {
      ...input,
      businessFunction: 'trade',
      proposerId: dealFormValues.userId,
      name0: dealFormValues.name0,
      name1: dealFormValues.name1!,
      description0: dealFormValues.description,
    };
  }

  if (dealFormValues.dealType === 'offer') {
    return {
      ...input,
      businessFunction: 'sell',
      sellerId: dealFormValues.userId,
      name: dealFormValues.name0,
      description: dealFormValues.description,
    };
  }

  return {
    ...input,
    businessFunction: 'buy',
    buyerId: dealFormValues.userId,
    name: dealFormValues.name0,
    description: dealFormValues.description,
  };
};

export default parseCreateDealInput;
