import { Deal } from './deal.types';

export const parseReportedDealerId = ({
  dealType,
  versionValues,
}: {
  dealType: Deal;
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
