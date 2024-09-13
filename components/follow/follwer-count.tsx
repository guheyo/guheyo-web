export default function FollowerCount({
  followerCount,
}: {
  followerCount: number;
}) {
  return (
    <div className="flex flex-row gap-1">
      <div className="text-gray-300 font-semibold">{followerCount}</div>
      팔로워
    </div>
  );
}
