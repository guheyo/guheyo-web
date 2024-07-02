import { TagResponse } from '@/generated/graphql';

export default function PostTags({ tags }: { tags: TagResponse[] }) {
  return (
    <>
      {tags.map((tag) => (
        <div
          key={tag.id}
          className="rounded-lg px-1 py-0.5 text-[10px] md:text-xs bg-zinc-600 text-gray-300"
        >
          {tag.name}
        </div>
      ))}
    </>
  );
}
