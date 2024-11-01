import { CreateAuctionInput, CreatePostInput } from '@/generated/graphql';
import { SHIPPING_FREE } from '@/lib/shipping/shipping.constants';
import dayjs from 'dayjs';
import { AUCTION_LIVE } from '@/lib/auction/auction.constants';
import { AuctionFormValues } from './auction.types';

const parseCreateAuctionInput = ({
  auctionFormValues,
}: {
  auctionFormValues: AuctionFormValues;
}): CreateAuctionInput => {
  const postInput: CreatePostInput = {
    type: 'auction',
    title: auctionFormValues.title,
    groupId: auctionFormValues.groupId,
    categoryId: auctionFormValues.categoryId,
    brandId: auctionFormValues.brandId,
  };
  const createdAt = new Date();
  const originalEndDate = dayjs(createdAt)
    .add(auctionFormValues.duration, 'd')
    .toDate();
  const auctionInput: CreateAuctionInput = {
    post: postInput,
    id: auctionFormValues.id,
    createdAt,
    originalEndDate,
    extendedEndDate: originalEndDate,
    content: auctionFormValues.content,
    shippingCost: 0,
    shippingType: SHIPPING_FREE,
    status: AUCTION_LIVE,
  };
  return auctionInput;
};

export default parseCreateAuctionInput;
