import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  emph,
  className = "",
}) {
  const alignCls =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
     className={`flex flex-col ${alignCls} ${className}`}
    >
      {eyebrow && (
        <div
          className={`uppercase tracking-[0.22em] text-xs mb-5 ${
            light ? "text-white/70" : "text-sage-600"
          }`}
        >
          {eyebrow}
        </div>
      )}

      <h2
        className={`font-serif text-5xl leading-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
        {emph && (
          <span className="text-sage-600">
            {" "}
            {emph}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-6 max-w-2xl text-lg ${
            light ? "text-white/70" : "text-ink-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}