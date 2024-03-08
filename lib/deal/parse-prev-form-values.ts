import {
  DemandResponse,
  OfferResponse,
  SwapResponse,
} from '@/generated/graphql';
import _ from 'lodash';
import { DealFormValues } from './deal.interfaces';

export const parsePrevOfferFormValues: (
  prevDeal: OfferResponse,
) => DealFormValues = (prevDeal) => ({
  dealType: 'offer',
  categoryId: prevDeal.productCategoryId,
  ..._.pick(prevDeal, ['id', 'groupId', 'price', 'source']),
  images: prevDeal.images,
  userId: prevDeal.seller.id,
  name0: prevDeal.name,
  description: prevDeal.description || undefined,
});

export const parsePrevDemandFormValues: (
  prevDeal: DemandResponse,
) => DealFormValues = (prevDeal) => ({
  dealType: 'demand',
  categoryId: prevDeal.productCategoryId,
  ..._.pick(prevDeal, ['id', 'groupId', 'price', 'source']),
  images: prevDeal.images,
  userId: prevDeal.buyer.id,
  name0: prevDeal.name,
  description: prevDeal.description || undefined,
});

export const parsePrevSwapFormValues: (
  prevDeal: SwapResponse,
) => DealFormValues = (prevDeal) => ({
  dealType: 'swap',
  categoryId: prevDeal.productCategoryId,
  ..._.pick(prevDeal, ['id', 'groupId', 'price', 'name0', 'source']),
  images: prevDeal.images,
  userId: prevDeal.proposer.id,
  description: prevDeal.description0 || undefined,
});
