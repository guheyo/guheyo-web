export const parseTempProductFormKey = ({
  userId,
  productId,
}: {
  userId: string;
  productId?: string;
}) =>
  productId ? `${userId}.edit.product.${productId}` : `${userId}.write.product`;
