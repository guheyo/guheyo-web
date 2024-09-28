export const parseThreadLink = ({
  action,
  threadId,
}: {
  action: 'edit' | 'report';
  threadId: string;
}) => `/${action}/thread/${threadId}`;
