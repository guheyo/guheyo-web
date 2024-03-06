import ImagePreview from './image.preview';
import { UserImage } from '../../lib/image/image.interfaces';

export default function ImagePreviews({ images }: { images: UserImage[] }) {
  return (
    <div className="flex flex-row gap-2">
      {images.map((image) => (
        <ImagePreview key={image.id} image={image} />
      ))}
    </div>
  );
}
