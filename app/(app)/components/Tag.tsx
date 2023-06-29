type TagProps = {
  name: string;
  isSelected?: boolean;
};

export default function Tag({ name, isSelected }: TagProps) {
  return (
    <div
      className={`transition-all duration-100 underline underline-offset-4 decoration-4 decoration-cyan-300/30 hover:decoration-cyan-300/90 ${
        isSelected ? "text-cyan-300 decoration-cyan-300/90" : ""
      }`}
    >
      <div>#{name}</div>
    </div>
  );
}
