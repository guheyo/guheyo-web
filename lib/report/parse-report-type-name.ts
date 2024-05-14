import { ReportType } from './report.types';

export const parseReportTypeName = (reportType: ReportType) =>
  reportType === 'post' ? '게시글' : '댓글';
