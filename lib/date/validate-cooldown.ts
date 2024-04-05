import dayjs from 'dayjs';

export const validateCooldown = (lastDate: Date, seconds: number = 86400) =>
  dayjs().diff(lastDate, 's', true) > seconds;
