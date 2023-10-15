import { AuctionPost, Post } from 'prisma';
import moment from 'moment';

export const getPostTitle = (post: Post) => {
  switch (post.type) {
    case 'sell': {
      return post.title;
    }
    case 'buy': {
      return post.title;
    }
    case 'trade': {
      return `${post.title}\n->\n${post.subTitle}`;
    }
    case 'auction-schedule': {
      return post.auctionPost?.title;
    }
    case 'auction': {
      return post.auctionPost?.title;
    }
    default:
      return '';
  }
};

export const getPrice = (post: Post) => {
  switch (post.type) {
    case 'sell': {
      return `${post.price / 10000}만원`;
    }
    case 'buy': {
      return `${post.price / 10000}만원`;
    }
    case 'trade': {
      return '';
    }
    case 'auction': {
      return `${(post.auctionPost?.lastBidAmount ?? 0) / 10000}만원`;
    }
    default:
      return '';
  }
};
export const getAuctionDate = (auctionPost: AuctionPost) => {
  const now = moment();
  const auctionStart = moment(auctionPost.auctionStartDate);
  const auctionEnd = moment(auctionPost.auctionEndDate);

  if (auctionPost.type === 'auction-schedule') {
    return `${auctionStart.format('YYYY')}년 ${auctionStart.format(
      'MM',
    )}월 ${auctionStart.format('DD')}일`;
  }

  if (now.isBefore(auctionStart)) return '경매 시작 전';
  if (now.isAfter(auctionEnd)) return '경매종료';
  if (auctionPost.type === 'auction') {
    const duration = moment.duration(auctionEnd.diff(now));
    return `남은 경매 기간: ${duration.days()}일 ${duration.hours()}시간`;
  }

  return '';
};
