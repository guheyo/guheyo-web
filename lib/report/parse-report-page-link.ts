export const parseReportPageLink = ({
  type,
  refId,
}: {
  type: string;
  refId: string;
}) => `/report/${type}/${refId}`;
