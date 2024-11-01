'use client';

import UserSortOrderSelector from './user-sort-order-selector';

export default function UserSelectors() {
  return (
    <div className="flex gap-1 md:gap-2 justify-end">
      <UserSortOrderSelector />
    </div>
  );
}
