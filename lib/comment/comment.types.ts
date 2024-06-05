import { UserImage } from '../image/image.interfaces';

export type CommentValues = {
  id: string;
  content: string;
  images: UserImage[];
};
