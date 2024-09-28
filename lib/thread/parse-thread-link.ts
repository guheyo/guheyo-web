import { ThreadResponse } from '@/generated/graphql';
import { parseNewURL } from '../query-string/parse-new-url';

export const parseThreadLink = ({
  action,
  thread,
}: {
  action: 'edit' | 'report';
  thread: ThreadResponse;
}) =>
  parseNewURL({
    searchParamsString: '',
    pathname: `/${action}/thread/${thread.id}`,
    paramsToUpdate: [
      {
        name: 'groupId',
        value: thread.post.group.id,
      },
    ],
  });
