import { OfferPreviewResponse } from '@/generated/graphql';
import { cache } from './cache';

export function updateCacheWithNewOffer(newOffer: OfferPreviewResponse) {
  cache.modify({
    fields: {
      findOfferPreviews(existingOfferPreviews = {}) {
        return {
          ...existingOfferPreviews,
          edges: [
            {
              node: newOffer,
              cursor: newOffer.id,
            },
            ...existingOfferPreviews.edges,
          ],
        };
      },
    },
  });
}
