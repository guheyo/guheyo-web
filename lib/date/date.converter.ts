import dayjs from 'dayjs';

export const convertPeriodToDate = (period: string | null) => {
  switch (period) {
    case '1w': {
      // dayjs .toDate causing error in apollo query
      return new Date(dayjs().subtract(1, 'w').toString());
    }
    case '1m': {
      return new Date(dayjs().subtract(1, 'M').toString());
    }
    case '1y': {
      return new Date(dayjs().subtract(1, 'y').toString());
    }
    default:
      return new Date(dayjs().subtract(100, 'y').toString());
  }
};
