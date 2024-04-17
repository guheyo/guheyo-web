export default function PostPreviewTitle({ title }: { title: string }) {
  return (
    <div className="text-xs md:text-sm font-medium text-light-200">{title}</div>
  );
}
