import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  Stethoscope,
  Sparkles,
  CalendarClock,
  Lock,
  BadgeCheck,
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import { TRUST_PILLARS } from "../lib/brand";

const trustIcons = [
  ShieldCheck,
  BadgeCheck,
  GraduationCap,
  Stethoscope,
  Sparkles,
  CalendarClock,
  HeartHandshake,
  Lock,
];

export default function WhyTrust() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <SectionHeading
          align="center"
          eyebrow="Why families trust Anara"
          title="A foundation built on"
          emph="trust, training and warmth."
          subtitle="We believe the smallest details — the way a caregiver greets a child, the patience they bring to a grandparent — are what make care extraordinary."
          className="mx-auto items-center text-center"
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">

          {TRUST_PILLARS.map((item, index) => {

            const Icon = trustIcons[index % trustIcons.length];

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="rounded-3xl p-6 bg-ivory-100/60 border border-sage-100 hover:bg-ivory-100 hover:border-sage-200 transition-colors"
              >

                <div className="w-11 h-11 rounded-2xl bg-white shadow-soft flex items-center justify-center text-sage-600 border border-sage-100">
                  <Icon className="w-5 h-5" />
                </div>

                <h4 className="font-serif text-[18px] text-ink mt-5 leading-tight">
                  {item.title}
                </h4>

                <p className="mt-2 text-[13.5px] text-ink-muted leading-relaxed">
                  {item.body}
                </p>

              </motion.div>

            );
          })}

        </div>

      </div>
    </section>
  );
}
