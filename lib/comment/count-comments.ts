import { ReportResponse } from '@/generated/graphql';

export const countComments = (refs: ReportResponse[]) =>
  refs.reduce((count, ref) => count + ref.comments.length, 0);
