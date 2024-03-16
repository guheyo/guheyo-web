export const parseReportPageLink = ({
  username,
  type,
  refId,
}: {
  username: string;
  type: string;
  refId: string;
}) => `/user/${username}/report?type=${type}&${type}Id=${refId}`;
