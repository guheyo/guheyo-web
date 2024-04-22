import { ListItem, ListItemIcon, Typography } from '@mui/material';
import Link from 'next/link';

export default function BottomNavbarItem({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <Link href={href}>
      <ListItem className="flex flex-col items-center justify-center text-dark-200 hover:text-light-200 p-0">
        <ListItemIcon
          className="text-gray-400"
          style={{
            minWidth: 'unset',
            width: 'auto',
            marginBottom: '2px',
          }}
        >
          {icon}
        </ListItemIcon>
        <Typography className="text-xs md:text-sm">{text}</Typography>
      </ListItem>
    </Link>
  );
}