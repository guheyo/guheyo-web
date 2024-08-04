export const parseThreadCategoryTypeLabel = ({
  categoryType,
}: {
  categoryType: string;
}) => {
  switch (categoryType) {
    case 'gb':
      return '공동구매';
    default:
      return '스레드';
  }
};
