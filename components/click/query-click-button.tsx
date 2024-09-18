'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import { ReactNode } from 'react';
import BaseClickButton from './base-click-button';

export default function QueryClickButton({
  queryKey,
  defaultClicked,
  clickedNode,
  unClickedNode,
}: {
  queryKey: string;
  clickedNode: ReactNode;
  unClickedNode: ReactNode;
  defaultClicked: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (clicked: boolean) => {
    router.push(
      parseNewURL({
        searchParamsString: searchParams.toString(),
        pathname,
        paramsToUpdate: [
          {
            name: queryKey,
            value: clicked.toString(),
          },
        ],
      }),
    );
  };

  return (
    <BaseClickButton
      defaultClicked={defaultClicked}
      clickedNode={clickedNode}
      unClickedNode={unClickedNode}
      handleClick={handleClick}
    />
  );
}
