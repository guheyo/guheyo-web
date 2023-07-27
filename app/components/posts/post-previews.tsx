import { Fragment, memo } from 'react';
import { Post } from 'prisma';
import PostPreview from '@/app/components/posts/post-preview';
import { Posts } from '@/app/lib/api/posts';

interface Props {
  posts: Posts[] | undefined;
  cols: number;
  type: string;
}

function PostPreviews({ posts, type, cols }: Props) {
  if (!posts) return null;
  return (
    <>
      {posts.map((group) => (
        <Fragment key={group.cursor}>
          {group.posts.map((post: Post) => (
            <div
              className="col-span-1 bg-subBg text-highlightText"
              key={post.id}
            >
              <PostPreview type={type} post={post} cols={cols} />
            </div>
          ))}
        </Fragment>
      ))}
    </>
  );
}

export default memo(PostPreviews);
