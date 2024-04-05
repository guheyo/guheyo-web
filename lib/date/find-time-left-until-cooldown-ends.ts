import dayjs from 'dayjs';

export const findTimeLeftUntilCooldownEnds = (
  lastDate: Date,
  seconds: number = 86400,
) => dayjs(lastDate).add(seconds, 's').fromNow();
