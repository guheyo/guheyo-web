import dayjs from 'dayjs';

export const validateBump = (bumpedAt: Date, seconds: number = 86400) =>
  dayjs().diff(bumpedAt, 's', true) > seconds;
