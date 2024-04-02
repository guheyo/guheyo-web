import dayjs from 'dayjs';

export const convertPeriodToDateString = (period: string | null) => {
  switch (period) {
    case '1w': {
      return dayjs().subtract(1, 'w').toDate().toDateString();
    }
    case '1m': {
      return dayjs().subtract(1, 'M').toDate().toDateString();
    }
    default: {
      return dayjs().subtract(1, 'y').toDate().toDateString();
    }
  }
};
