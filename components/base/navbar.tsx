'use client';

import Link from 'next/link';
import Image from 'next/image';
import LoginButton from './login-button';
import Scrollbar from './scrollbar';
import SearchButton from '../search/search-button';
import WriteButton from '../write/write-button';

export default function Navbar() {
  return (
    <Scrollbar upPosition="top-0" zIndex={50}>
      <header className="w-full border-b-2 border-dark-600 bg-dark-500 px-2 md:px-0">
        <div className="grid grid-cols-12 py-0 h-12 items-center">
          <div className="col-span-2 md:col-span-6 justify-self-start">
            <Link href="/">
              <div className="flex flex-row gap-2">
                <Image
                  alt="guheyo logo"
                  src="/star/star-bg-purple-rounded.ico"
                  width={32}
                  height={32}
                  className="rounded"
                />
              </div>
            </Link>
          </div>
          <div className="col-span-10 md:col-span-6 justify-self-end md:justify-self-end">
            <div className="flex flex-row gap-2 md:gap-8 items-center">
              <SearchButton />
              <WriteButton />
              <LoginButton />
            </div>
          </div>
        </div>
      </header>
    </Scrollbar>
  );
}
