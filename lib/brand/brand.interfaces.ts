import { UserImage } from '../image/image.interfaces';
import { Link } from '../link/link.interfaces';

export type BrandFormValues = {
  id: string;
  name: string;
  slug?: string;
  description?: string;
  logo?: string;
  image: UserImage | null;
  groupIds: string[];
  categoryIds: string[];
  links: Link[];
};
