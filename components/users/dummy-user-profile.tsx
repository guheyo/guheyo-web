'use client';

import { parseUserAbout } from '@/lib/user/parse-user-about';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import Avatar from '../avatar/avatar';

export default function DummyUserProfile() {
  const device = useDeviceDetect();

  return (
    <div className="grid grid-cols-12 gap-0 text-sm md:text-base items-center">
      <div className="col-span-3 md:col-span-3">
        <Avatar
          name="게스트"
          src={undefined}
          fontSize={device === 'mobile' ? 'text-6xl' : 'text-9xl'}
        />
      </div>
      <div className="col-span-9 md:col-span-7">
        <div className="grid grid-cols-12 gap-0">
          <span className="col-span-9 md:col-span-9 text-gray-300 text-lg font-bold justify-self-start">
            방문 멤버
          </span>
          <div className="col-span-9 pb-2">
            {parseUserAbout({
              username: '뉴비',
              about: '안녕하세요!\n저는 비로그인 멤버에게만 보여요!',
            })}
          </div>
          <div className="col-span-3" />
        </div>
      </div>
    </div>
  );
}
