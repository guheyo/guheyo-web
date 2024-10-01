import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';
import { ComponentSize } from '@/lib/component/component.types';
import { WRITABLE_CHANNEL_OPTIONS } from '@/lib/write/write.constants';
import { parseWriteLink } from '@/lib/write/parse-write-link';
import { parseIconSize } from '@/lib/icon/parse-icon-size';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { LoadingButton } from '@mui/lab';

export default function WriteChannelSelector({
  groupSlug,
  size,
}: {
  groupSlug: string | null;
  size: ComponentSize;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const device = useDeviceDetect();
  const [loading, setLoading] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(null);
  };

  const handleItemClick = (channelSlug: string) => {
    setLoading(true);
    router.push(
      parseWriteLink({
        groupSlug: groupSlug || undefined,
        channelSlug,
      }),
    );
    setLoading(false);
  };

  return (
    <div>
      <LoadingButton
        type="submit"
        loading={loading}
        className="text-xs md:text-sm font-bold text-gray-300 rounded-full"
        sx={{
          minWidth: 0, // Set minimum width to 0
        }}
        name="write-channel-selector"
        onClick={handleClick}
      >
        <AddIcon className={parseIconSize(size)} />
        {device === 'browser' && '업로드'}
      </LoadingButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {WRITABLE_CHANNEL_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            onClick={() => handleItemClick(option.value)}
            sx={{ justifyContent: 'center' }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
