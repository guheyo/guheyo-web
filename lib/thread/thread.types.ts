import { UserImage } from '../image/image.interfaces';

export type ThreadValues = {
  id: string;
  groupId: string;
  categoryId?: string;
  brandId?: string;
  content: string;
  images: UserImage[];
};

export type ThreadMode = 'create' | 'read' | 'update' | 'delete';
