'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import {
  BidPlacedDocument,
  BidResponse,
  useFindAuthorQuery,
} from '@/generated/graphql';
import { scrollToBottom } from '@/lib/scroll/scroll-to-bottom';
import {
  FindBidsOrderByArgs,
  FindBidsWhereArgs,
} from '@/lib/bid/bid.interfaces';
import { placeBid } from '@/lib/api/bid';
import { useInfiniteBids } from '@/hooks/use-infinite-bids';
import { BidValues } from '@/lib/bid/bid.types';
import { useSubscription } from '@apollo/client';
import { AuthContext } from '../auth/auth.provider';
import BidOutput from './bid-output';
import BidInput from './bid-input';

export default function BidFeed({
  where,
  orderBy,
}: {
  where: FindBidsWhereArgs;
  orderBy: FindBidsOrderByArgs;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [bids, setBids] = useState<BidResponse[]>([]); // State to store bids
  const [isAtBottom, setIsAtBottom] = useState(false);
  const buffer = 50;

  // Event handler for scrolling
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const { scrollHeight } = document.documentElement;
    const { clientHeight } = document.documentElement;
    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - buffer);
  };

  const handlePlaceBid = async (values: BidValues) => {
    if (!jwtPayload || !where.auctionId || !values.price) return;

    await placeBid({
      id: values.id,
      auctionId: where.auctionId,
      price: values.price,
      priceCurrency: 'krw',
    });
    scrollToBottom();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAtBottom) {
      scrollToBottom();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bids]);

  const { loading: bidsLoading, data: bidsData } = useInfiniteBids({
    ref: sentinelRef,
    where,
    orderBy,
    take: 10,
  });

  const { loading: userLoading, data: UserData } = useFindAuthorQuery({
    variables: {
      id: jwtPayload?.id,
    },
  });

  // Load bids if not loading and bids data is available
  useEffect(() => {
    if (!bidsLoading && bidsData?.findBids) {
      setBids(bidsData.findBids.edges.map((edge) => edge.node));
    }
  }, [bidsLoading, bidsData]);

  useSubscription(BidPlacedDocument, {
    variables: {
      auctionId: where.auctionId,
    },
    onData: ({ data }) => {
      const newBid = data.data.bidPlaced;
      setBids([newBid, ...bids]);
    },
    shouldResubscribe: true, // Always resubscribe
  });

  if (bidsLoading || userLoading) return <div />;

  const user = UserData?.findAuthor;

  return (
    <div className="flex flex-col relative pb-16 lg:pb-32">
      <div className="flex-1 flex flex-col gap-6">
        {bids.map((bid) => (
          <BidOutput
            key={bid.id}
            user={bid.user}
            isCurrentUser={jwtPayload?.id === bid.user.id}
            displayMenu
            bidId={bid.id}
            price={bid.price}
            createdAt={bid.createdAt}
            canceledAt={bid.canceledAt}
          />
        ))}
        <div ref={sentinelRef} />
      </div>
      <div className="fixed bottom-0 w-full max-w-2xl mx-auto bg-dark-500 py-6 md:py-10">
        <BidInput
          user={user || undefined}
          currentBidPrice={bids[0]?.price || 0}
          handlePlaceBid={handlePlaceBid}
        />
      </div>
    </div>
  );
}
