import _ from 'lodash';
import { AuthorResponse } from '@/generated/graphql';
import Link from 'next/link';
import { parseUserHomeLink } from '@/lib/user/parse-user-page.link';
import Username from './user-name';

export default function UsernameLink({ user }: { user: AuthorResponse }) {
  return (
    <Link href={parseUserHomeLink({ username: user.username })}>
      <Username user={user} />
    </Link>
  );
}
