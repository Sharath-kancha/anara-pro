export default function FloatingCard({
  title,
  subtitle,
  top,
  left,
  right,
  bottom,
}) {
  return (
    <div
      className="absolute bg-white rounded-2xl shadow-xl px-5 py-4"
      style={{
        top,
        left,
        right,
        bottom,
      }}
    >
      <h4 className="font-semibold text-sage-600">
        {title}
      </h4>

      <p className="text-sm text-gray-500">
        {subtitle}
      </p>
    </div>
  );
}