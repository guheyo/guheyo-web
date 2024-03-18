import { commentDemandReport } from '../api/demand';
import { commentOfferReport } from '../api/offer';
import { commentSwapReport } from '../api/swap';

const commentDealReport = ({
  type,
  id,
  refId,
  content,
  reportId,
  authorId,
  source,
}: {
  type: string;
  id: string;
  refId: string;
  content: string;
  reportId: string;
  authorId: string;
  source: string;
}) => {
  const input = {
    id,
    content,
    reportId,
    authorId,
    source,
  };
  if (type === 'offer') {
    return commentOfferReport({
      ...input,
      offerId: refId,
    });
  }
  if (type === 'demand') {
    return commentDemandReport({
      ...input,
      demandId: refId,
    });
  }
  if (type === 'swap') {
    return commentSwapReport({
      ...input,
      swapId: refId,
    });
  }
  throw new Error('Invalid type');
};

export default commentDealReport;
