export const parseUserReviewContentLabel = ({ rating }: { rating: number }) => {
  if (rating === 1) {
    return `비매너, 사기, 기만 행위를 공유해 주세요 (필수)`;
  }
  if (rating === 2) {
    return `훈훈한 거래 경험을 공유해 주세요 (선택)`;
  }
  return `훈훈한 거래 경험을 공유해 주세요 (선택)`;
};
