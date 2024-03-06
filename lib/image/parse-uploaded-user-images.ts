import _ from 'lodash';
import { v4 as uuid4 } from 'uuid';
import { UploadedImage } from './image.interfaces';

const parseUploadedImages = ({
  files,
  offset,
}: {
  files: FileList | null;
  offset: number;
}): UploadedImage[] =>
  files
    ? _.map(files, (file, i) => ({
        file,
        userImage: {
          id: uuid4(),
          name: file.name,
          position: offset + i,
        },
      }))
    : [];

export default parseUploadedImages;
