export const parsePrice = (price: number) =>
  `${Intl.NumberFormat('ko-KR').format(price)}`;
