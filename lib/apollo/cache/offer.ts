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

export function updateCacheWithDeletedOffer(offerId: string) {
  cache.modify({
    fields: {
      findOfferPreviews(existingOfferPreviews = {}) {
        const updatedEdges = existingOfferPreviews.edges.filter(
          (edge: any) => edge.cursor !== offerId,
        );

        return {
          ...existingOfferPreviews,
          edges: updatedEdges,
        };
      },
    },
  });
}
