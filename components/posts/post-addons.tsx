import { isNumber } from 'lodash';
import PostCommentCount from './post-comment-count';

export default function PostAddons({
  postCommentCount,
}: {
  postCommentCount?: number | null;
}) {
  return (
    <div className="flex flex-row gap-2 items-center text-xs md:text-sm justify-self-end">
      {isNumber(postCommentCount) && (
        <PostCommentCount comentCount={postCommentCount} />
      )}
    </div>
  );
}
