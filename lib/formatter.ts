export const getPrice = (price: number) => `${price / 10000}만원`;

export const truncateName = (name: string, length: number) => {
  const truncatedName = name.slice(0, length);
  return truncatedName.length < name.length
    ? `${truncatedName} ...`
    : truncatedName;
};
