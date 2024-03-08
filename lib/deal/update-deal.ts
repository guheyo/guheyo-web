import {
  UpdateDemandInput,
  UpdateOfferInput,
  UpdateSwapInput,
} from '@/generated/graphql';
import { Deal } from './deal.types';
import { updateOffer } from '../api/offer';
import { updateDemand } from '../api/demand';
import { updateSwap } from '../api/swap';

const updateDeal = async ({
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

export default updateDeal;
