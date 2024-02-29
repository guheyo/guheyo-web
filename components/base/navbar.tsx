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
        <div className="grid grid-cols-12 px-2 md:px-0 py-0 h-12 items-center">
          <div className="col-span-4 md:col-span-8 justify-self-start">
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
          <div className="col-span-4 md:col-span-2 justify-self-center md:justify-self-end">
            <SearchButton />
          </div>
          <div className="col-span-4 md:col-span-2 justify-self-end">
            <LoginButton />
          </div>
        </div>
      </header>
    </Scrollbar>
  );
}
