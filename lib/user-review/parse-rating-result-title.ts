export const parseRatingResultTitle = ({ rating }: { rating: number }) => {
  if (rating === 1) {
    return `비매너 행위를 당하셨나요?`;
  }
  if (rating === 2) {
    return `좋았던 점을 모두 표현해 주세요`;
  }
  return `최고였던 점을 모두 표현해 주세요`;
};
