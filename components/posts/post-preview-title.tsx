'use client';

import { useDeviceDetect } from '@/hooks/use-device-detect';
import { truncateText } from '@/lib/text/truncate-text';

export default function PostPreviewTitle({ title }: { title: string }) {
  const device = useDeviceDetect();

  return (
    <div className="text-base text-gray-300 font-medium">
      {truncateText(title, device === 'mobile' ? 25 : 40)}
    </div>
  );
}
