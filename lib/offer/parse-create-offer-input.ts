import { CreateOfferInput, CreatePostInput } from '@/generated/graphql';
import { OfferFormValues } from './offer.interfaces';
import { SHIPPING_FREE } from '../shipping/shipping.constants';

const parseCreateOfferInput = ({
  offerFormValues,
}: {
  offerFormValues: OfferFormValues;
}): CreateOfferInput => {
  const postInput: CreatePostInput = {
    type: 'offer',
    title: offerFormValues.name1
      ? `${offerFormValues.name0} - ${offerFormValues.name1}`
      : offerFormValues.name0,
    groupId: offerFormValues.groupId,
    categoryId: offerFormValues.categoryId,
    brandId: offerFormValues.brandId,
  };
  const offerInput: CreateOfferInput = {
    post: postInput,
    id: offerFormValues.id,
    businessFunction: offerFormValues.businessFunction,
    name0: offerFormValues.name0,
    name1: offerFormValues.name1,
    content: offerFormValues.content,
    priceCurrency: 'krw',
    price: offerFormValues.price,
    shippingCost:
      offerFormValues.shippingType === SHIPPING_FREE
        ? 0
        : offerFormValues.shippingCost,
    shippingType: offerFormValues.shippingType,
    status: 'open',
  };
  return offerInput;
};

export default parseCreateOfferInput;
