'use client';

export function PostMock({ height }: { height: number }) {
  return <div className={`col-span-1 bg-dark-400 h-${height} rounded-lg`} />;
}

export function PostMocks({ height }: { height: number }) {
  return (
    <>
      {Array.from(Array(12).keys()).map((num) => (
        <PostMock key={num} height={height} />
      ))}
    </>
  );
}
