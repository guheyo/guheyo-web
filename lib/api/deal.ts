import {
  UpdateDemandInput,
  UpdateOfferInput,
  UpdateSwapInput,
} from '@/generated/graphql';
import { DealType } from '../deal/deal.types';
import { deleteOffer, updateOffer } from './offer';
import { deleteDemand, updateDemand } from './demand';
import { deleteSwap, updateSwap } from './swap';

export const updateDeal = async ({
  dealType,
  updateDealInput,
}: {
  dealType: DealType;
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

export const deleteDeal = async ({
  dealType,
  id,
  authorId,
}: {
  dealType: DealType;
  id: string;
  authorId: string;
}) => {
  if (dealType === 'offer') {
    return deleteOffer(id, authorId);
  }
  if (dealType === 'demand') {
    return deleteDemand(id, authorId);
  }
  return deleteSwap(id, authorId);
};
