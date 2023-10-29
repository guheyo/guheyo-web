import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

export default function FloatingButton() {
  const pathname = usePathname();
  return (
    <Link href={`${pathname}?type=auction-create`}>
      <button
        type="button"
        className="fixed bottom-10 right-10 z-50 w-16 h-16 rounded-full bg-black shadow-md flex items-center justify-center text-white p-5"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-2 h-7 bg-white rounded-sm" />
          <div className="absolute h-2 w-7 bg-white rounded-sm" />
        </div>
      </button>
    </Link>
  );
}
