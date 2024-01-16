'use client';

import PersonPinIcon from '@mui/icons-material/PersonPin';
import IconText from './icon-text';

export default function Name({ name }: { name?: string }) {
  if (!name)
    return (
      <IconText>
        <PersonPinIcon />
        <div className="text-red-400">이름 미인증</div>
      </IconText>
    );
  return (
    <IconText>
      <PersonPinIcon />
      <div>{name}</div>
    </IconText>
  );
}
