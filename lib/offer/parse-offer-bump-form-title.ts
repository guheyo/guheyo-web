import { BusinessFunction } from './offer.types';

export const parseOfferBumpFormTitle = (businessFunction: BusinessFunction) => {
  switch (businessFunction) {
    case 'sell': {
      return `가격을 낮추어 끌어올리면\n빠르게 판매할 수 있어요`;
    }
    case 'buy': {
      return `가격을 높여 끌어올리면 빠르게 구매할 수 있어요`;
    }
    case 'swap': {
      return `추가금을 높여 끌어올리면 빠르게 교환할 수 있어요`;
    }
    default:
      return ``;
  }
};
