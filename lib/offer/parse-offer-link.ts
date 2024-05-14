export const parseOfferLink = ({
  action,
  offerId,
}: {
  action: 'edit' | 'bump' | 'report';
  offerId: string;
}) => `/${action}/offer/${offerId}`;
