import dayjs from 'dayjs';

export const parseCommentDate = ({
  createdAt,
  updatedAt,
}: {
  createdAt?: Date;
  updatedAt?: Date;
}) =>
  createdAt && updatedAt
    ? `${dayjs(updatedAt).fromNow()} ${
        createdAt !== updatedAt ? '(수정됨)' : ''
      }`
    : undefined;
