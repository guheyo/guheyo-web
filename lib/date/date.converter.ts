import dayjs from 'dayjs';
import { PERIOD } from './date.types';

export const convertPeriodToDate = (period: PERIOD | null) => {
  switch (period) {
    case '1w': {
      return dayjs().subtract(1, 'w').toDate();
    }
    case '1m': {
      return dayjs().subtract(1, 'M').toDate();
    }
    case '1y': {
      return dayjs().subtract(1, 'y').toDate();
    }
    default:
      return dayjs().subtract(100, 'y').toDate();
  }
};
