import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
//import EnquiryForm from "./EnquiryForm";
import FAQAccordion from "./FAQAccordion";
import SectionHeading from "./SectionHeading";

export default function ServicePage({
  serviceKey,
  serviceTitle,
  eyebrow,
  heroTitle,
  heroEmph,
  heroSubtitle,
  heroImage,
  features = [],
  inclusions = [],
  faqs = [],
  careForLabel,
  careForPlaceholder,
}) {
  return (
    <div data-testid={`service-page-${serviceKey}`}>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="sage-gradient absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-16 sm:pt-24 sm:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-[11px] uppercase tracking-[0.22em] text-sage-600 mb-5 inline-flex items-center gap-2">
                <span className="w-6 h-px bg-sage-300" /> {eyebrow}
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-[68px] leading-[1.02] tracking-tight text-ink">
                {heroTitle}{" "}
                <span className="serif-italic-emph">{heroEmph}</span>
              </h1>
              <p className="mt-6 text-lg text-ink-muted leading-relaxed max-w-xl">{heroSubtitle}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#enquiry"
                  data-testid={`service-${serviceKey}-cta-enquiry`}
                  className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white rounded-full px-6 py-3.5 text-[15px] font-medium transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  Begin enquiry
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  to="/contact"
                  data-testid={`service-${serviceKey}-cta-contact`}
                  className="inline-flex items-center gap-2 bg-white border border-sage-200 hover:border-sage-400 text-ink rounded-full px-6 py-3.5 text-[15px] font-medium transition-all"
                >
                  Talk to a coordinator
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-lift">
              <img src={heroImage} alt={serviceTitle} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="bg-ivory-100/85 backdrop-blur-md rounded-2xl px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-sage-600">Hyderabad</div>
                  <div className="text-[13px] text-ink mt-0.5">Verified, in-home care</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      {features.length > 0 && (
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="What's included"
              title="A care experience built around"
              emph="your family."
              subtitle="Every engagement is led by a coordinator and delivered by a verified professional matched to your needs."
            />
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-3xl bg-white p-7 border border-sage-100 hover:border-sage-300 transition-all hover:-translate-y-1 hover:shadow-lift"
                  data-testid={`service-${serviceKey}-feature-${i}`}
                >
                  <div className="w-10 h-10 rounded-2xl bg-sage-50 text-sage-600 flex items-center justify-center text-sm font-medium font-serif">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-serif text-xl text-ink mt-5">{f.title}</h3>
                  <p className="text-ink-muted text-[15px] mt-2 leading-relaxed">{f.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INCLUSIONS */}
      {inclusions.length > 0 && (
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="The standard"
                title="What every plan"
                emph="includes."
                subtitle="A baseline of warmth, safety and structure — refined for every family."
              />
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {inclusions.map((it, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-ivory-100/60 border border-sage-100"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-anarared-500" />
                  <div className="text-[15px] text-ink">{it}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ENQUIRY + FAQ */}
      <section id="enquiry" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <SectionHeading
              eyebrow="FAQ"
              title="Answers, before the"
              emph="questions."
            />
            <div className="mt-10">
              <FAQAccordion items={faqs} idPrefix={`faq-${serviceKey}`} />
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
  <h2>Enquiry Form Working</h2>
</div>
        </div>
      </section>
    </div>
  );
}
