import dayjs from 'dayjs';

export const findTimeLeftUntilBumpCooldownEnds = (
  bumpedAt: Date,
  seconds: number = 86400,
) => dayjs(bumpedAt).add(seconds, 's').fromNow();
