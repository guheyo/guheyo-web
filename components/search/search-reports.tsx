'use client';

import {
  FindReportPreviewsOrderByInput,
  FindReportPreviewsWhereInput,
} from '@/generated/graphql';
import ReportFeed from '../reports/report-feed';
import ReportTypeNavbar from '../reports/report-type-navbar';
import SearchContainer from './search-container';

export default function SearchReports() {
  const where: FindReportPreviewsWhereInput = {};
  const orderBy: FindReportPreviewsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <SearchContainer
      placeholder="어떤 신고를 찾고 있나요?"
      categories={<ReportTypeNavbar />}
      Feed={ReportFeed}
      feedProps={{
        type: 'listview',
        defaultWhere: where,
        defaultOrderBy: orderBy,
        defaultDistinct: false,
      }}
    />
  );
}
