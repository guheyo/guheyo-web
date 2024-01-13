'use client';

export function Mock({ height, color }: { height: number; color: string }) {
  // return <div className={`col-span-1 bg-dark-400 h-${height} rounded-lg`} />;
  return <div className={`col-span-1 ${color} h-${height} rounded-lg`} />;
}

export function Mocks({
  length,
  height,
  color,
}: {
  length: number;
  height: number;
  color: string;
}) {
  return (
    <>
      {Array.from(Array(length).keys()).map((num) => (
        <Mock key={num} height={height} color={color} />
      ))}
    </>
  );
}
