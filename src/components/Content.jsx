export default function Content({ content }) {
  return (
    <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-md text-white">
      <img
        src={content.img}
        alt={content.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-green-400 text-xs font-semibold">모집중</span>
        <div className="mt-1 text-lg font-bold">{content.title}</div>
        <p className="text-sm text-gray-300 mt-1">{content.subtitle}</p>
      </div>
    </div>
  );
}
