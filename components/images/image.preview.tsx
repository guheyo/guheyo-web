import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import { UserImage } from '../../lib/image/image.interfaces';

export default function ImagePreview({ image }: { image: UserImage }) {
  if (image.url)
    return (
      <Image
        src={image.url}
        alt={image.name}
        width={isMobile ? 36 : 48}
        height={isMobile ? 36 : 48}
        className="rounded"
      />
    );
  return <div>{image.name}</div>;
}
