'use client';

export function PostMock({ type }: { type: string }) {
  if (type === 'buy') {
    return (
      <div className="flex">
        <div className="bg-gray-200 w-[32rem] h-24" />
      </div>
    );
  }
  return (
    <div className="flex">
      <div className="bg-gray-200 w-96 h-72" />
    </div>
  );
}

export function PostMocks({ type }: { type: string }) {
  return (
    <>
      {Array.from(Array(18).keys()).map((num) => (
        <PostMock key={num} type={type} />
      ))}
    </>
  );
}
