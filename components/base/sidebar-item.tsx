import { ListItem, ListItemIcon, Typography } from '@mui/material';
import Link from 'next/link';

export default function SidebarItem({
  href,
  icon,
  text,
  isActive,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const handleClick = () => {
    onClick();
  };

  return (
    <Link href={href}>
      <ListItem onClick={handleClick}>
        <ListItemIcon
          className={isActive ? 'text-star-300 font-medium' : 'text-gray-400'}
          style={{ minWidth: 'unset', width: 'auto', marginRight: '12px' }}
        >
          {icon}
        </ListItemIcon>
        <Typography
          className={`text-sm lg:text-sm ${
            isActive ? 'text-star-300 font-medium' : 'text-gray-400'
          }`}
        >
          {text}
        </Typography>
      </ListItem>
    </Link>
  );
}
