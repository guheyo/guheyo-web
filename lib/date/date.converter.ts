import dayjs from 'dayjs';

export const convertPeriodToDateString = (period: string | null) => {
  switch (period) {
    case '1w': {
      return dayjs().subtract(1, 'w').toString();
    }
    case '1m': {
      return dayjs().subtract(1, 'M').toString();
    }
    case '1y': {
      return dayjs().subtract(1, 'y').toString();
    }
    default:
      return dayjs().subtract(100, 'y').toString();
  }
};
