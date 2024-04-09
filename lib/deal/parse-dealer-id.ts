import { DealType } from './deal.types';

export const parseDealerId = ({
  dealType,
  versionValues,
}: {
  dealType: DealType;
  versionValues: any;
}): string => {
  switch (dealType) {
    case 'offer': {
      return versionValues.sellerId;
    }
    case 'demand': {
      return versionValues.buyerId;
    }
    case 'swap': {
      return versionValues.proposerId;
    }
    default:
      return ``;
  }
};
