export const parseUserReviewImagesLabel = ({ rating }: { rating: number }) => {
  if (rating === 1) {
    return `증거 이미지 업로드 (필수)`;
  }
  if (rating === 2) {
    return `이미지 업로드 (선택)`;
  }
  return `이미지 업로드 (선택)`;
};
