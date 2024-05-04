'use client';

import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import LoginButton from '../auth/login-button';
import SearchButton from '../search/search-button';
import WriteButton from '../write/write-button';
import Avatar from '../avatar/avatar';

export default function Navbar({
  handleMenuToggle,
}: {
  handleMenuToggle: () => void;
}) {
  return (
    <div className="sticky top-0 w-full z-40">
      <header className="w-full bg-dark-500">
        {/* Desktop layout */}
        <div className="hidden lg:flex items-center justify-between h-14">
          {/* Left side logo */}
          <div className="flex items-center h-full w-64 bg-dark-600 pl-7">
            <Avatar
              name="guheyo logo"
              src="/star/star-bg-purple-rounded.ico"
              fontSize="text-base"
              variant="rounded"
            />
          </div>

          {/* Right side buttons */}
          <div className="flex items-center justify-end space-x-2 pr-7">
            <WriteButton />
            <LoginButton />
          </div>

          {/* Centered SearchButton */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <SearchButton />
          </div>
        </div>

        {/* Mobile and tablet layout */}
        <div className="lg:hidden flex items-center justify-between h-12 pl-5 pr-2">
          {/* Left side menu and logo */}
          <div className="flex flex-row items-center space-x-4">
            <button
              className="lg:hidden"
              type="button"
              onClick={handleMenuToggle}
              aria-label="Toggle Menu"
            >
              <MenuIcon />
            </button>
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
          <div className="flex items-center space-x-0">
            <SearchButton />
            <WriteButton />
            <LoginButton />
          </div>
        </div>
      </header>
    </div>
  );
}
