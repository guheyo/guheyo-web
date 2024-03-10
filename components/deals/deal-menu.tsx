import * as React from 'react';
import { Deal } from '@/lib/deal/deal.types';
import { AuthContext } from '../auth/auth.provider';
import PrivateDealMenu from './private-deal-menu';
import PublicDealMenu from './public-deal-menu';

export default function DealMenu({
  dealType,
  dealId,
  authorId,
  groupSlug,
}: {
  dealType: Deal;
  dealId: string;
  authorId: string;
  groupSlug: string;
}) {
  const { user } = React.useContext(AuthContext);

  if (user?.id === authorId)
    return (
      <PrivateDealMenu
        dealType={dealType}
        dealId={dealId}
        groupSlug={groupSlug}
      />
    );

  return (
    <PublicDealMenu dealType={dealType} dealId={dealId} groupSlug={groupSlug} />
  );
}
