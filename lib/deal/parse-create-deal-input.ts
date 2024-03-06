import {
  CreateDemandInput,
  CreateOfferInput,
  CreateSwapInput,
} from '@/generated/graphql';
import { Device } from '@/hooks/use-device-detect';
import { DealFormValues } from './deal.interfaces';

const parseCreateDealInput = ({
  dealFormValues,
  groupId,
  userId,
  device,
}: {
  dealFormValues: DealFormValues;
  groupId: string;
  userId: string;
  device: Device;
}): CreateOfferInput | CreateDemandInput | CreateSwapInput => {
  const input = {
    id: dealFormValues.id,
    groupId,
    productCategoryId: dealFormValues.categoryId,
    priceCurrency: 'krw',
    price: dealFormValues.price,
    source: device,
  };

  if (dealFormValues.dealType === 'swap') {
    return {
      ...input,
      businessFunction: 'trade',
      proposerId: userId,
      name0: dealFormValues.name0,
      name1: dealFormValues.name1!,
      description0: dealFormValues.description,
    };
  }

  if (dealFormValues.dealType === 'offer') {
    return {
      ...input,
      businessFunction: 'sell',
      sellerId: userId,
      name: dealFormValues.name0,
      description: dealFormValues.description,
    };
  }

  return {
    ...input,
    businessFunction: 'buy',
    buyerId: userId,
    name: dealFormValues.name0,
    description: dealFormValues.description,
  };
};

export default parseCreateDealInput;
