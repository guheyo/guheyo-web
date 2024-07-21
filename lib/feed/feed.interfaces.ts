import { PostPreviewType } from '../post/post.types';

export interface FeedComponentProps {
  type: PostPreviewType;
  defaultWhere: any;
  defaultOrderBy: any;
  keyword?: string;
  target?: string;
  defaultDistinct: boolean;
}

export type FeedComponent = React.ComponentType<FeedComponentProps>;
