import {
  DemandResponse,
  OfferResponse,
  SwapResponse,
} from '@/generated/graphql';
import _ from 'lodash';
import { DealFormValues } from './deal.interfaces';
import { ShippingType } from '../shipping/shipping.types';

export const parsePrevOfferFormValues: (
  prevDeal: OfferResponse,
) => DealFormValues = (prevDeal) => ({
  dealType: 'offer',
  productCategoryId: prevDeal.productCategoryId,
  ..._.pick(prevDeal, ['id', 'price', 'shippingCost', 'source']),
  shippingType: prevDeal.shippingType as ShippingType,
  groupId: prevDeal.group.id,
  images: prevDeal.images,
  userId: prevDeal.seller.id,
  name0: prevDeal.name,
  description: prevDeal.description || undefined,
});

export const parsePrevDemandFormValues: (
  prevDeal: DemandResponse,
) => DealFormValues = (prevDeal) => ({
  dealType: 'demand',
  productCategoryId: prevDeal.productCategoryId,
  ..._.pick(prevDeal, ['id', 'price', 'shippingCost', 'source']),
  shippingType: prevDeal.shippingType as ShippingType,
  groupId: prevDeal.group.id,
  images: prevDeal.images,
  userId: prevDeal.buyer.id,
  name0: prevDeal.name,
  description: prevDeal.description || undefined,
});

export const parsePrevSwapFormValues: (
  prevDeal: SwapResponse,
) => DealFormValues = (prevDeal) => ({
  dealType: 'swap',
  productCategoryId: prevDeal.productCategoryId,
  ..._.pick(prevDeal, [
    'id',
    'price',
    'shippingCost',
    'name0',
    'name1',
    'source',
  ]),
  shippingType: prevDeal.shippingType as ShippingType,
  groupId: prevDeal.group.id,
  images: prevDeal.images,
  userId: prevDeal.proposer.id,
  description: prevDeal.description0 || undefined,
});
