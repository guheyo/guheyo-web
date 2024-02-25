'use client';

import Link from 'next/link';
import Image from 'next/image';
import LoginButton from './login-button';
import Scrollbar from './scrollbar';
import SearchButton from '../search/search-button';

export default function Navbar() {
  return (
    <Scrollbar upPosition="top-0" zIndex={50}>
      <header className="w-full border-b-2 border-dark-600 bg-dark-500">
        <div className="flex items-center justify-between px-2 md:px-0 py-4 h-12">
          <Link href="/">
            <div className="flex flex-row gap-2 items-center">
              <Image
                alt="guheyo logo"
                src="/star/star-bg-purple-rounded.ico"
                width={32}
                height={32}
                className="rounded"
              />
            </div>
          </Link>
          <SearchButton />
          <LoginButton />
        </div>
      </header>
    </Scrollbar>
  );
}
