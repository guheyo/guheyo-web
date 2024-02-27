import dayjs from 'dayjs';

export const convertPeriodToDateString = (period: string | null) => {
  switch (period) {
    case '1w': {
      return dayjs().subtract(1, 'w').toDate().toDateString();
    }
    case '1m': {
      return dayjs().subtract(1, 'M').toDate().toDateString();
    }
    case '1y': {
      return dayjs().subtract(1, 'y').toDate().toDateString();
    }
    default:
      return dayjs().subtract(100, 'y').toDate().toDateString();
  }
};
