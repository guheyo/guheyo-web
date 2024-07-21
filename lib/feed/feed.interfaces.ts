import { PostPreviewType } from '../post/post.types';

export interface FeedComponentProps {
  type: PostPreviewType;
  defaultWhere: any;
  defaultOrderBy: any;
  defaultDistinct: boolean;
}

export type FeedComponent = React.ComponentType<FeedComponentProps>;
