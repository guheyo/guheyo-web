export const parseTempBrandFormKey = ({
  userId,
  brandId,
}: {
  userId: string;
  brandId?: string;
}) => (brandId ? `${userId}.edit.brand.${brandId}` : `${userId}.write.brand`);
