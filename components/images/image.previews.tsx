import ImagePreview from './image.preview';
import { UploadedUserImage } from './image.interfaces';

export default function ImagePreviews({
  uploadedImages,
}: {
  uploadedImages: UploadedUserImage[];
}) {
  return (
    <div className="flex flex-row gap-2">
      {uploadedImages.map((image) => (
        <ImagePreview
          key={image.file.name}
          file={image.file}
          info={image.info}
        />
      ))}
    </div>
  );
}
