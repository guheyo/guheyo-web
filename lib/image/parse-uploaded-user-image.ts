import { v4 as uuid4 } from 'uuid';
import { UploadedImage } from './image.interfaces';

const parseUploadedImage = ({ file }: { file: File }): UploadedImage => ({
  file,
  userImage: {
    id: uuid4(),
    name: file.name,
    position: 0,
  },
});

export default parseUploadedImage;
