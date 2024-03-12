import {
  UpdateDemandInput,
  UpdateOfferInput,
  UpdateSwapInput,
} from '@/generated/graphql';
import { Deal } from '../deal/deal.types';
import { updateOffer } from './offer';
import { updateDemand } from './demand';
import { updateSwap } from './swap';

export const updateDeal = async ({
  dealType,
  updateDealInput,
}: {
  dealType: Deal;
  updateDealInput: UpdateOfferInput | UpdateDemandInput | UpdateSwapInput;
}) => {
  if (dealType === 'offer') {
    return updateOffer(updateDealInput as UpdateOfferInput);
  }
  if (dealType === 'demand') {
    return updateDemand(updateDealInput as UpdateDemandInput);
  }
  return updateSwap(updateDealInput as UpdateSwapInput);
};
