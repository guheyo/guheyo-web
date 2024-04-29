import { TagResponse } from '@/generated/graphql';

export default function UserReviewTags({
  tags,
  rating,
}: {
  tags: TagResponse[];
  rating: number;
}) {
  return (
    <>
      {tags.map((tag) => (
        <div
          key={tag.id}
          className={`rounded-sm px-1 py-0.5 text-[10px] md:text-xs ${
            rating === 1
              ? 'bg-gray-900 text-light-200'
              : 'bg-gray-500 text-light-200'
          }`}
        >
          {tag.name}
        </div>
      ))}
    </>
  );
}
