'use client';

import AuctionHome from '@/components/auction/auction-home';
import HomeFooter from '@/components/footers/home-footer';
import GbHome from '@/components/gb/gb-home';
import OfferHome from '@/components/offers/offer-home';
import { useGroup } from '@/hooks/use-group';
import GroupJoinSection from './group-join-section';
import UserReviewHome from '../user-review/user-review-home';
import InfoHome from '../info/info-home';

export default function GroupHome() {
  const { group } = useGroup();
  if (!group) return <div />;

  return (
    <>
      <div className="min-h-screen mb-12 flex flex-col gap-0 md:gap-8">
        <div className="px-4 md:px-0 pt-4">
          <GroupJoinSection
            name={group.name}
            icon={group.icon}
            slug={group.slug!}
          />
        </div>
        <AuctionHome />
        <OfferHome businessFunction="sell" />
        <OfferHome businessFunction="buy" />
        <OfferHome businessFunction="swap" />
        <GbHome />
        <UserReviewHome />
        <InfoHome />
      </div>
      <HomeFooter />
    </>
  );
}
