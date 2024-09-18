export default function FollowCount({
  followType,
  followCount,
}: {
  followType: 'follower' | 'following';
  followCount: number;
}) {
  return (
    <div className="flex flex-row gap-1">
      <div className="text-gray-300 font-semibold">
        {Intl.NumberFormat('en-US', {
          notation: 'compact',
          maximumFractionDigits: 1,
        }).format(followCount)}
      </div>
      {followType === 'following' ? '팔로잉' : '팔로워'}
    </div>
  );
}
