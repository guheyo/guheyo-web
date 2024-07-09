export const parseWritePlaceholder = ({
  channelSlug,
}: {
  channelSlug: string;
}) => {
  switch (channelSlug) {
    case 'auction':
      return '경매할 제품의 그룹을 선택해 주세요';
    case 'sell':
      return '판매할 제품의 그룹을 선택해 주세요';
    case 'buy':
      return '구매할 제품의 그룹을 선택해 주세요';
    case 'swap':
      return '교환할 제품의 그룹을 선택해 주세요';
    case 'thread':
      return '작성할 게시글의 그룹을 선택해 주세요';
    default:
      return '';
  }
};
