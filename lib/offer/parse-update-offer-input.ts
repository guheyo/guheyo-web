import { UpdateOfferInput, UpdatePostInput } from '@/generated/graphql';
import { OfferFormValues } from './offer.interfaces';
import { SHIPPING_FREE } from '../shipping/shipping.constants';

const parseUpdateOfferInput = ({
  offerFormValues,
}: {
  offerFormValues: OfferFormValues;
}): UpdateOfferInput => {
  const postInput: UpdatePostInput = {
    title: offerFormValues.name1
      ? `${offerFormValues.name0} - ${offerFormValues.name1}`
      : offerFormValues.name0,
    content: offerFormValues.content,
    categoryId: offerFormValues.categoryId,
  };
  const offerInput = {
    post: postInput,
    id: offerFormValues.id,
    name0: offerFormValues.name0,
    name1: offerFormValues.name1,
    priceCurrency: 'krw',
    price: offerFormValues.price,
    shippingCost:
      offerFormValues.shippingType === SHIPPING_FREE
        ? 0
        : offerFormValues.shippingCost,
    shippingType: offerFormValues.shippingType,
  };
  return offerInput;
};

export default parseUpdateOfferInput;
