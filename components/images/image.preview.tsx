import { UploadedUserImage } from './image.interfaces';

export default function ImagePreview({ file }: UploadedUserImage) {
  return (
    <div className="flex flex-col gap-2">
      <div>{file.name}</div>
      <div>{file.size}</div>
    </div>
  );
}
