const commonStyle = `rounded-lg p-1 shadow-xl text-white `;

const tagColors: { [key: string]: string } = {
  React: "bg-blue-500",
  "Next.js": "bg-yellow-500",
  JavaScript: "bg-green-500",
  TypeScript: "bg-orange-500",
};

const Tag = ({ tag }: { tag: string }) => {
  const bgColor = tagColors[tag] || "bg-gray-600";
  return <span className={`${commonStyle} ${bgColor}`}>{tag}</span>;
};

export default Tag;
