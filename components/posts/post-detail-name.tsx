export default function PostDetailTitle({ title }: { title: string }) {
  return (
    <div className="text-base md:text-lg text-gray-300 font-semibold">
      {title}
    </div>
  );
}
