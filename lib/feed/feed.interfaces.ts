import { ComponentSize } from '../component/component.types';
import { PostPreviewType } from '../post/post.types';

export interface FeedComponentProps {
  type: PostPreviewType;
  defaultWhere: any;
  defaultOrderBy: any;
  defaultDistinct: boolean;
  generateLink?: (slug: string) => string;
  size?: ComponentSize;
}

export type FeedComponent = React.ComponentType<FeedComponentProps>;
