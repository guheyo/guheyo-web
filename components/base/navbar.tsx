'use client';

import Link from 'next/link';
import Image from 'next/image';
import LoginButton from '../auth/login-button';
import Scrollbar from './scrollbar';
import SearchButton from '../search/search-button';
import WriteButton from '../write/write-button';

export default function Navbar() {
  return (
    <Scrollbar upPosition="top-0" zIndex={50}>
      <header className="w-full border-b-2 border-dark-600 bg-dark-500 px-2 lg:px-4">
        {/* Desktop layout */}
        <div className="hidden lg:flex items-center justify-between h-14">
          {/* Left side logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                alt="guheyo logo"
                src="/star/star-bg-purple-rounded.ico"
                // width={32}
                // height={32}
                width={36}
                height={36}
                className="rounded"
              />
            </Link>
          </div>
          {/* Centered SearchButton */}
          <div className="flex-grow flex justify-center">
            <SearchButton />
          </div>
          {/* Right side buttons */}
          <div className="flex items-center justify-end space-x-4">
            <WriteButton />
            <LoginButton />
          </div>
        </div>

        {/* Mobile and tablet layout */}
        <div className="lg:hidden flex items-center justify-between h-12">
          {/* Left side logo */}
          <div>
            <Link href="/">
              <Image
                alt="guheyo logo"
                src="/star/star-bg-purple-rounded.ico"
                width={32}
                height={32}
                className="rounded"
              />
            </Link>
          </div>
          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <SearchButton />
            <WriteButton />
            <LoginButton />
          </div>
        </div>
      </header>
    </Scrollbar>
  );
}
