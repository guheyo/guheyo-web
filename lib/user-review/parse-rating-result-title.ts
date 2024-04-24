export const parseRatingResultTitle = ({ rating }: { rating: number }) => {
  if (rating === 1) {
    return `거래하며 겪은 불쾌함과 사기, 기만 행위를 비매너 후기로 공유해 주세요`;
  }
  if (rating === 2) {
    return `좋았던 점을 모두 표현해 주세요`;
  }
  return `최고였던 점을 모두 표현해 주세요`;
};
