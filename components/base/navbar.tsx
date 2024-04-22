'use client';

import Link from 'next/link';
import Image from 'next/image';
import LoginButton from '../auth/login-button';
import SearchButton from '../search/search-button';
import WriteButton from '../write/write-button';

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full z-50">
      <header className="w-full bg-dark-500">
        {/* Desktop layout */}
        <div className="hidden lg:flex items-center justify-between h-14">
          {/* Left side logo */}
          <div className="flex items-center h-full w-56 bg-dark-600 pl-8">
            <Link href="/">
              <Image
                alt="guheyo logo"
                src="/star/star-bg-purple-rounded.ico"
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
          <div className="flex items-center justify-end space-x-4 pr-8">
            <WriteButton />
            <LoginButton />
          </div>
        </div>

        {/* Mobile and tablet layout */}
        <div className="lg:hidden flex items-center justify-between h-12 px-2">
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
    </div>
  );
}
