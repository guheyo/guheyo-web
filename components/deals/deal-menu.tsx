import * as React from 'react';
import { Deal } from '@/lib/deal/deal.types';
import { AuthContext } from '../auth/auth.provider';
import PrivateDealMenu from './private-deal-menu';
import PublicDealMenu from './public-deal-menu';

export default function DealMenu({
  dealType,
  dealId,
  authorId,
  slug,
  privateOnly,
}: {
  dealType: Deal;
  dealId: string;
  authorId: string;
  slug: string;
  privateOnly?: boolean;
}) {
  const { user } = React.useContext(AuthContext);

  if (user?.id === authorId)
    return (
      <PrivateDealMenu
        dealType={dealType}
        dealId={dealId}
        username={user.username}
        slug={slug}
      />
    );

  if (privateOnly) return <div />;

  return <PublicDealMenu dealType={dealType} dealId={dealId} />;
}
