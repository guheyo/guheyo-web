import {
  CreateDemandInput,
  CreateOfferInput,
  CreateSwapInput,
} from '@/generated/graphql';
import { DealType } from './deal.types';
import { createOffer } from '../api/offer';
import { createDemand } from '../api/demand';
import { createSwap } from '../api/swap';

const createDeal = ({
  dealType,
  createDealInput,
}: {
  dealType: DealType;
  createDealInput: CreateOfferInput | CreateDemandInput | CreateSwapInput;
}) => {
  if (dealType === 'offer') {
    return createOffer(createDealInput as CreateOfferInput);
  }
  if (dealType === 'demand') {
    return createDemand(createDealInput as CreateDemandInput);
  }
  return createSwap(createDealInput as CreateSwapInput);
};

export default createDeal;
