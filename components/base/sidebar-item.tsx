import { ListItem, ListItemIcon, Typography } from '@mui/material';
import Link from 'next/link';

export default function SidebarItem({
  href,
  icon,
  text,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}) {
  const handleClick = () => {
    onClick();
  };

  return (
    <Link href={href}>
      <ListItem onClick={handleClick}>
        <ListItemIcon
          className="text-gray-400"
          style={{ minWidth: 'unset', width: 'auto', marginRight: '12px' }}
        >
          {icon}
        </ListItemIcon>
        <Typography className="text-base">{text}</Typography>
      </ListItem>
    </Link>
  );
}
