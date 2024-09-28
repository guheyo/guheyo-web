import { parseNewURL } from '../query-string/parse-new-url';

export const parseThreadLink = ({
  action,
  threadId,
  groupId,
}: {
  action: 'edit' | 'report';
  threadId: string;
  groupId: string;
}) =>
  parseNewURL({
    searchParamsString: '',
    pathname: `/${action}/thread/${threadId}`,
    paramsToUpdate: [
      {
        name: 'groupId',
        value: groupId,
      },
    ],
  });
