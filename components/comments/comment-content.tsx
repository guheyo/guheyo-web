import dayjs from 'dayjs';
import CommentMenu from './comment-menu';

export default function CommentContent({
  displayMenu,
  content,
  createdAt,
}: {
  displayMenu: boolean;
  content?: string;
  createdAt?: Date;
}) {
  if (!content || !createdAt) return <div />;

  return (
    <div className="">
      <div className="text-light-200 font-light text-xs md:text-sm">
        {content}
      </div>
      <div className="text-dark-200 text-xs md:text-sm">
        {dayjs(createdAt).fromNow()}
      </div>
      {displayMenu && <CommentMenu />}
    </div>
  );
}
