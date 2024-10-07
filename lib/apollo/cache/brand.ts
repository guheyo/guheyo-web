import { BrandPreviewResponse } from '@/generated/graphql';
import { cache } from './cache';

export function updateCacheWithNewBrand(newBrand: BrandPreviewResponse) {
  cache.modify({
    fields: {
      findBrandPreviews(existingBrandPreviews = {}) {
        return {
          ...existingBrandPreviews,
          edges: [
            {
              node: newBrand,
              cursor: newBrand.id,
            },
            ...existingBrandPreviews.edges,
          ],
        };
      },
    },
  });
}
