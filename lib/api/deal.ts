import {
  UpdateDemandInput,
  UpdateOfferInput,
  UpdateSwapInput,
} from '@/generated/graphql';
import { DealType } from '../deal/deal.types';
import { deleteOffer, findOfferCount, updateOffer } from './offer';
import { deleteDemand, findDemandCount, updateDemand } from './demand';
import { deleteSwap, findSwapCount, updateSwap } from './swap';

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

export const findDealCount = async ({
  dealType,
  authorId,
  productCategoryId,
  fromHours,
}: {
  dealType: DealType;
  authorId: string;
  productCategoryId: string;
  fromHours: number;
}) => {
  if (dealType === 'offer') {
    const { data } = await findOfferCount({
      sellerId: authorId,
      productCategoryId,
      fromHours,
    });
    return data.findOfferCount;
  }
  if (dealType === 'demand') {
    const { data } = await findDemandCount({
      buyerId: authorId,
      productCategoryId,
      fromHours,
    });
    return data.findDemandCount;
  }
  const { data } = await findSwapCount({
    proposerId: authorId,
    productCategoryId,
    fromHours,
  });
  return data.findSwapCount;
};
