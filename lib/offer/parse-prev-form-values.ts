import { OfferResponse } from '@/generated/graphql';
import { OfferFormValues } from './offer.interfaces';
import { ShippingType } from '../shipping/shipping.types';
import { BusinessFunction } from './offer.types';

export const parsePrevOfferFormValues: (
  prevOffer: OfferResponse,
) => OfferFormValues = (prevOffer) => ({
  id: prevOffer.id,
  groupId: prevOffer.post.group.id,
  categoryId: prevOffer.post.category!.id,
  brandId:
    prevOffer.post.brands.length > 0 ? prevOffer.post.brands[0].id : undefined,
  images: prevOffer.post.images,
  title: prevOffer.post.title,
  content: prevOffer.content || '',
  name0: prevOffer.name0 || '',
  name1: prevOffer.name1 || '',
  businessFunction: prevOffer.businessFunction as BusinessFunction,
  price: prevOffer.price,
  shippingCost: prevOffer.shippingCost,
  shippingType: prevOffer.shippingType as ShippingType,
});
