import { ProductPreviewResponse } from '@/generated/graphql';
import { cache } from './cache';

export function updateCacheWithNewProduct(newProduct: ProductPreviewResponse) {
  cache.modify({
    fields: {
      findProductPreviews(existingProductPreviews = {}) {
        return {
          ...existingProductPreviews,
          edges: [
            {
              node: newProduct,
              cursor: newProduct.id,
            },
            ...existingProductPreviews.edges,
          ],
        };
      },
    },
  });
}
