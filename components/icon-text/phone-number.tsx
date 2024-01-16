'use client';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import IconText from './icon-text';

export default function PhoneNumber({ phoneNumber }: { phoneNumber?: string }) {
  if (!phoneNumber)
    return (
      <IconText>
        <PhoneAndroidIcon />
        <div className="text-red-400">휴대전화 번호 미인증</div>
      </IconText>
    );
  return (
    <IconText>
      <PhoneAndroidIcon />
      <div>{phoneNumber}</div>
    </IconText>
  );
}
