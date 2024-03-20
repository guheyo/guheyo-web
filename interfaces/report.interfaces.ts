import { SortOrder } from '@/types/sort.types';

export interface FindReportPreviewsWhereArgs {
  type?: string;

  refId?: string;

  status?: string;

  createdAt?: {
    gt: string;
  };
}

export interface FindReportPreviewsOrderByArgs {
  createdAt?: SortOrder;
}
