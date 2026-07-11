import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Compass, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";


const VALUES = [
  { icon: Heart, title: "Family first", body: "We design for the people you love — never just for transactions." },
  { icon: ShieldCheck, title: "Trust by default", body: "Verification, training and quality checks are non-negotiable foundations." },
  { icon: Compass, title: "Quiet excellence", body: "We aim for care that's noticeable in its calm, not its noise." },
  { icon: Sparkles, title: "Continuity of care", body: "A coordinator who knows you. A caregiver who returns. Care that stays." },
];

export default function About() {
  return (
    <div data-testid="page-about">
      <section className="relative overflow-hidden">
        <div className="sage-gradient absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="max-w-4xl">
            <div className="text-[11px] uppercase tracking-[0.22em] text-sage-600 inline-flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-sage-300" /> About Anara
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl sm:text-6xl lg:text-[80px] leading-[0.98] tracking-tight text-ink"
            >
              Care, woven into the{" "}
              <span className="serif-italic-emph">fabric of family.</span>
            </motion.h1>
            <p className="mt-8 text-lg text-ink-muted leading-relaxed max-w-2xl">
              Anara Life Thread is being built as India's most trusted family care ecosystem — a single, gentle place to find verified babysitters, caregivers, therapists and postpartum specialists.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="rounded-[2.5rem] overflow-hidden aspect-[5/6]">
              <img
                src="https://images.pexels.com/photos/7642220/pexels-photo-7642220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900"
                alt="Family"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 space-y-12">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-sage-600 mb-3">Our mission</div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight text-ink">To make trusted family care effortless — for every Indian family.</h2>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-sage-600 mb-3">Our vision</div>
              <p className="text-lg text-ink-muted leading-relaxed">
                A future where every chapter of life — birth, growing up, working years, ageing — is supported by warm, verified, professional care. Starting in Hyderabad. Spreading, gently, across India.
              </p>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-sage-600 mb-3">Why Anara exists</div>
              <p className="text-lg text-ink-muted leading-relaxed">
                Modern Indian families are stretched. Working parents. Adult children with ageing parents. New mothers searching for support. Anara is built to be the calm centre of all of it — one trusted relationship at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Core values"
            title="What we hold"
            emph="sacred."
            subtitle="Four quiet principles that shape every decision, every match, every visit."
          />
          <div className="mt-16 grid sm:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="rounded-3xl bg-white border border-sage-100 hover:border-sage-200 p-8 transition-all hover:shadow-lift hover:-translate-y-1"
                data-testid={`value-card-${i}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-sage-50 text-sage-600 flex items-center justify-center">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl mt-6 text-ink">{v.title}</h3>
                <p className="text-ink-muted mt-3 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 sm:py-32 bg-[#1F2A23] text-ivory-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            light
            eyebrow="Our story"
            title="Born from a single,"
            emph="ordinary question."
          />
          <div className="mt-10 space-y-6 text-ivory-100/80 text-[17px] leading-[1.85]">
            <p>
              How do families in India find care they can truly trust? Care that's verified, trained, warm — and available when life shifts unexpectedly?
            </p>
            <p>
              The honest answer was: with great difficulty. Through forwarded WhatsApp messages, hurried referrals and a quiet hope that this time, it would work out.
            </p>
            <p>
              Anara Life Thread was started to change that — to build, slowly and carefully, a single place where families across India can find caregivers, babysitters, therapists and postpartum specialists who are trained, verified and held to a quietly extraordinary standard.
            </p>
            <p>
              We are beginning in Hyderabad, our home. We will grow only as fast as we can stay attentive. And we will, always, design Anara around the people you love.
            </p>
          </div>
          <div className="mt-12">
            <Link
              to="/contact"
              data-testid="about-cta-contact"
              className="inline-flex items-center gap-2 bg-ivory-100 text-ink hover:bg-white rounded-full px-7 py-4 text-[15px] font-medium transition-all"
            >
              Talk to us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
