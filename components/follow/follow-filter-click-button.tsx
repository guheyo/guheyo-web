'use client';

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import QueryClickButton from '../click/query-click-button';

export default function FollowFilterClickButton() {
  return (
    <QueryClickButton
      queryKey="followed"
      defaultClicked={false}
      clickedNode={
        <div className="flex flex-row items-center gap-1 text-xs md:text-sm text-blurple-500">
          <PersonAddAlt1Icon />
          팔로잉
        </div>
      }
      unClickedNode={
        <div className="flex flex-row items-center gap-1 text-xs md:text-sm text-gray-300">
          <PersonAddAlt1Icon />
          팔로잉
        </div>
      }
    />
  );
}
