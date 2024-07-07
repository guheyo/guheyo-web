'use client';

import { useDeviceDetect } from '@/hooks/use-device-detect';
import { truncateText } from '@/lib/text/truncate-text';

export default function PostPreviewContent({ content }: { content: string }) {
  const device = useDeviceDetect();

  return (
    <div className="text-xs md:text-sm text-dark-200">
      {truncateText(content, device === 'mobile' ? 25 : 40)}
    </div>
  );
}
