import { AuctionPreviewResponse } from '@/generated/graphql';
import { cache } from './cache';

export function updateCacheWithNewAuction(newAuction: AuctionPreviewResponse) {
  cache.modify({
    fields: {
      findAuctionPreviews(existingAuctionPreviews = {}) {
        return {
          ...existingAuctionPreviews,
          edges: [
            {
              node: newAuction,
              cursor: newAuction.id,
            },
            ...existingAuctionPreviews.edges,
          ],
        };
      },
    },
  });
}
