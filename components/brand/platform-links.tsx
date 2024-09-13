import { LinkResponse } from '@/generated/graphql';
import Link from 'next/link';
import Avatar from '../avatar/avatar';

export default function PlatformLinks({ links }: { links: LinkResponse[] }) {
  return (
    <div className="flex flex-wrap justify-start">
      {links.map((link) => (
        <Link key={link.id} href={link.url}>
          <div className="flex flex-row items-center mr-1.5 gap-1">
            <Avatar
              name={link.platform.name}
              src={link.platform.logo!}
              fontSize="text-3xs"
            />
            <div className="text-gray-400">{link.platform.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
