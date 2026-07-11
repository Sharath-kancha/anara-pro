import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ items, idPrefix = "faq" }) {
  const [open, setOpen] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl bg-white border border-sage-100 p-4 shadow-soft"
    >
      {items.map((it, i) => (
        <div
          key={i}
          className="border-b border-sage-100 last:border-b-0"
          data-testid={`${idPrefix}-item-${i}`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center py-5 text-left"
          >
            <span className="font-serif text-xl text-ink">
              {it.q}
            </span>

            <ChevronDown
              className={`transition-transform ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>

          {open === i && (
            <div className="pb-5 text-ink-muted leading-7">
              {it.a}
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );
}