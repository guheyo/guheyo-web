export const parseVersionLink = ({
  versionType,
  versionId,
}: {
  versionType: string;
  versionId: string;
}) => `/version/${versionType}/${versionId}`;
