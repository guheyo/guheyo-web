import { AuctionErrorMessage } from './auction.error.message';

export const parseAuctionAlertMessage = (
  message: AuctionErrorMessage,
): string => {
  switch (message) {
    case AuctionErrorMessage.AUCTION_NOT_FOUND:
      return '경매를 찾을 수 없어요';
    case AuctionErrorMessage.AUCTION_CLOSED:
      return '경매가 종료되었어요';
    case AuctionErrorMessage.INVALID_FIND_AUCTION_ARGS:
      return '잘못된 변수를 입력받았어요';
    case AuctionErrorMessage.BID_NOT_FOUND:
      return '입찰을 찾을 수 없어요';
    case AuctionErrorMessage.BID_FROM_SELLER_ERROR:
      return '판매자는 본인의 경매에 입찰할 수 없어요';
    case AuctionErrorMessage.BID_BELOW_THE_CURRENT_PRICE:
      return '최고 입찰가보다 더 높은 가격으로만 입찰할 수 있어요';
    case AuctionErrorMessage.CANCELLERS_ATTEMPT_TO_RE_BID:
      return '입찰 취소한 경매에는 다시 입찰할 수 없어요';
    case AuctionErrorMessage.BID_CANCELLATION_TIMEOUT:
      return '입찰 취소 가능 시간이 초과되었어요';
    case AuctionErrorMessage.AUCTION_CREATION_FAILED:
      return '경매 생성에 실패했어요';
    case AuctionErrorMessage.AUCTION_UPDATE_REQUEST_FROM_UNAUTHORIZED_USER:
      return '승인되지 않은 유저는 경매를 수정할 수 없어요';
    case AuctionErrorMessage.BID_CREATION_FAILED:
      return '입찰 생성에 실패했어요';
    case AuctionErrorMessage.BID_CANCELLATION_TARGET_IS_NOT_A_RECENT_BID:
      return '마지막 입찰만 취소 할 수 있어요';
    case AuctionErrorMessage.PLACE_BID_RETRY_LIMIT_EXCEEDED:
      return '입찰 실패';
    default:
      return '입찰 실패';
  }
};
