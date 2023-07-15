'use client';

export default function MockCard({
  type
}: {
  type: string
}) {
  if (type === 'buy') {
    return (
      <div className='flex'>
        <div className='bg-gray-200 w-[32rem] h-24' />
      </div>
    );
  }
  return (
    <div className='flex'>
      <div className='bg-gray-200 w-96 h-72' />
    </div>
  );
}