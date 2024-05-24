import dayjs from 'dayjs';

export const parseBidDate = ({
  createdAt,
  canceledAt,
}: {
  createdAt: Date;
  canceledAt?: Date;
}) =>
  `${dayjs(createdAt).fromNow()}${
    canceledAt
      ? ` (입찰 취소: ${dayjs(canceledAt).format('YYYY-MM-DD HH:MM:ss')})`
      : ''
  }`;
