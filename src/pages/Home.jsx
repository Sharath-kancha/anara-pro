import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  Stethoscope,
  Sparkles,
  CalendarClock,
  Lock,
  BadgeCheck,
  Apple,
  Smartphone,
  MapPin,
  Star,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { BRAND, SERVICES, TRUST_PILLARS, HOW_STEPS, TESTIMONIALS } from "../lib/brand";
import SectionHeading from "../components/SectionHeading";
//import { submitNotifyMe } from "../lib/api";

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

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyLoading, setNotifyLoading] = useState(false);
  const [notifyDone, setNotifyDone] = useState(false);

  const submitNotify = async (e) => {
    e.preventDefault();
    if (!notifyEmail) return;
    setNotifyLoading(true);
    try {
     // await submitNotifyMe({ email: notifyEmail, platform: "both" });
      setNotifyDone(true);
      toast.success("You're on the list. We'll write when the Anara app is ready.");
      setNotifyEmail("");
    } catch {
      toast.error("Could not subscribe. Please check the email and try again.");
    } finally {
      setNotifyLoading(false);
    }
  };

  return (
    <div data-testid="page-home">
      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="sage-gradient absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 lg:pt-20 pb-20 lg:pb-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-sage-200/60 text-[12px] text-ink">
                <span className="w-1.5 h-1.5 rounded-full bg-anarared-500 animate-pulse" />
                Launching in Hyderabad · Expanding across India
              </div>
              <h1
                data-testid="home-hero-title"
                className="font-serif mt-7 text-[44px] sm:text-6xl lg:text-[78px] leading-[0.98] tracking-[-0.025em] text-ink"
              >
                Supporting every{" "}
                <span className="serif-italic-emph">chapter</span>
                <br className="hidden sm:inline" /> of life.
              </h1>
              <p className="mt-7 text-[17px] sm:text-lg text-ink-muted leading-relaxed max-w-xl">
                From childcare and elder care to therapy and postpartum support — Anara Lifethread connects families with trained, verified and compassionate professionals.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#services"
                  data-testid="home-hero-explore-cta"
                  className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white rounded-full px-7 py-4 text-[15px] font-medium transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/signup"
                  data-testid="home-hero-book-cta"
                  className="inline-flex items-center gap-2 bg-white border border-sage-200 hover:border-sage-400 text-ink rounded-full px-7 py-4 text-[15px] font-medium transition-all"
                >
                  Sign Up
                </Link>
              </div>

              <div className="mt-14 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-white border-2 border-ivory-100 shadow-soft overflow-hidden">
                      <img alt="family" src={`https://i.pravatar.cc/80?img=${i + 10}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gold-500">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <div className="text-[13px] text-ink-muted mt-1">Trusted by Hyderabad families</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* HERO IMAGE */}
          <div className="lg:col-span-6">
            <motion.div
              style={{ y: heroY, scale: heroScale }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-lift">
   <img
  src={`${process.env.PUBLIC_URL}/images/home-family-hero.png`}
  alt="Anara Lifethread family care"
  className="w-full h-full object-cover"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
              </div>

              {/* Floating card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -left-4 sm:-left-10 top-12 bg-white rounded-2xl shadow-lift p-4 w-56 border border-sage-100"
              >
                <div className="flex items-center gap-2 text-sage-600 text-[11px] uppercase tracking-[0.18em]">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified care
                </div>
                <div className="font-serif text-[17px] mt-2 text-ink leading-tight">Background-checked professionals</div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="absolute -right-4 sm:-right-6 bottom-16 bg-[#1F2A23] text-ivory-100 rounded-2xl shadow-lift p-4 w-60"
              >
                <div className="text-[11px] uppercase tracking-[0.18em] text-gold-500">4 chapters of care</div>
                <div className="mt-2 grid grid-cols-2 gap-1.5 text-[13px]">
                  <div>Babysitting</div><div>Elder Care</div>
                  <div>Therapy</div><div>Postpartum</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Trust marquee */}
        <div className="relative pb-12">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-6">Built on a foundation of trust</div>
            <div className="marquee-mask overflow-hidden">
              <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
                {[...TRUST_PILLARS, ...TRUST_PILLARS].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 text-ink/70 text-[14px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                    {p.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our care, four chapters"
                title="Care that grows with"
                emph="every family."
                subtitle="From a newborn's first weeks to a grandparent's quiet afternoons — Anara is built to support the people you love, at every stage."
              />
            </div>
            <div className="lg:col-span-5">
              <p className="text-ink-muted text-[15px] leading-relaxed">
                Each service is led by a dedicated coordinator, delivered by a verified professional, and continuously checked for quality, warmth and continuity.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-7">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={s.path}
                  data-testid={`home-service-card-${s.key}`}
                  className="group block rounded-[2.25rem] overflow-hidden bg-white border border-sage-100 hover:border-sage-300 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5 bg-ivory-100/85 backdrop-blur-md rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-sage-700">
                      0{i + 1} · Chapter
                    </div>
                  </div>
                  <div className="p-7 sm:p-8 flex items-end justify-between gap-6">
                    <div>
                      <h3 className="font-serif text-[28px] sm:text-3xl text-ink leading-tight">{s.title}</h3>
                      <p className="mt-3 text-ink-muted text-[15px] leading-relaxed max-w-md">{s.description}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-sage-600 text-[14px] font-medium">
                        Learn more
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY TRUST ============ */}
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
            {TRUST_PILLARS.map((p, i) => {
              const Icon = trustIcons[i % trustIcons.length];
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-3xl p-6 bg-ivory-100/60 border border-sage-100 hover:bg-ivory-100 hover:border-sage-200 transition-colors"
                  data-testid={`trust-card-${i}`}
                >
                  <div className="w-11 h-11 rounded-2xl bg-white shadow-soft flex items-center justify-center text-sage-600 border border-sage-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-[18px] text-ink mt-5 leading-tight">{p.title}</h4>
                  <p className="mt-2 text-[13.5px] text-ink-muted leading-relaxed">{p.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="How Anara works"
              title="A calm, four-step"
              emph="beginning."
              subtitle="No paperwork chaos. No cold calls. Just a quiet, guided path to the right care."
            />
            <Link
              to="/contact"
              data-testid="how-it-works-cta"
              className="mt-10 inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white rounded-full px-6 py-3.5 text-[15px] font-medium transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              Start your consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="absolute left-[34px] top-2 bottom-2 w-px bg-gradient-to-b from-sage-200 via-sage-300 to-transparent" />
            <div className="space-y-7">
              {HOW_STEPS.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-24"
                  data-testid={`how-step-${i}`}
                >
                  <div className="absolute left-0 top-0 w-[70px] h-[70px] rounded-2xl bg-white border border-sage-100 shadow-soft flex items-center justify-center font-serif text-2xl text-sage-600">
                    {step.n}
                  </div>
                  <h3 className="font-serif text-2xl text-ink">{step.title}</h3>
                  <p className="mt-2 text-ink-muted text-[15px] leading-relaxed max-w-lg">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT PREVIEW ============ */}
      <section className="py-24 sm:py-32 bg-[#1F2A23] text-ivory-100 relative overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[480px] h-[480px] rounded-full bg-sage-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-gold-500/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              light
              eyebrow="About Anara"
              title="Care that grows with"
              emph="every family."
              subtitle="Anara Lifethread was founded on a quiet belief: that families across India deserve a single, trusted place to find care — without the chaos, the cold calls, or the compromise."
            />
            <Link
              to="/about"
              data-testid="about-preview-cta"
              className="mt-9 inline-flex items-center gap-2 bg-ivory-100 text-ink hover:bg-white rounded-full px-6 py-3.5 text-[15px] font-medium transition-all hover:-translate-y-0.5"
            >
              Learn more
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-5">
            {[
              { label: "Verified caregivers", value: "100%" },
              { label: "Cities at launch", value: "Hyderabad" },
              { label: "Chapters of care", value: "4" },
              { label: "Coordinator-led", value: "Always" },
            ].map((s) => (
              <div key={s.label} className="rounded-3xl bg-ivory-100/5 border border-ivory-100/10 p-6 backdrop-blur-sm">
                <div className="font-serif text-3xl sm:text-4xl text-ivory-100">{s.value}</div>
                <div className="text-[12.5px] uppercase tracking-[0.2em] mt-3 text-gold-500/90">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Stories from Hyderabad"
            title="Quiet trust, in their"
            emph="own words."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="rounded-3xl bg-white p-7 border border-sage-100 hover:border-sage-200 shadow-soft hover:shadow-lift transition-all"
                data-testid={`testimonial-${i}`}
              >
                <div className="flex items-center gap-1 text-gold-500">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <blockquote className="mt-5 font-serif text-[19px] leading-snug text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-sage-100">
                  <div className="text-[14px] text-ink font-medium">{t.name}</div>
                  <div className="text-[12.5px] text-ink-muted mt-0.5">{t.role}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LOCATIONS ============ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Where we care"
              title="Beginning in Hyderabad."
              emph="Quietly building, across India."
              subtitle="We launch where we can be present, attentive and consistent. Hyderabad is our first home. The next chapters of Anara are already being written."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-sage-100 bg-ivory-100/60 p-8 sm:p-12">
              <div className="grid grid-cols-3 gap-3 sm:gap-5">
                <div className="col-span-3 sm:col-span-2 rounded-3xl bg-[#1F2A23] text-ivory-100 p-7 relative overflow-hidden">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-gold-500">Now serving</div>
                  <div className="font-serif text-4xl mt-3">Hyderabad</div>
                  <div className="text-ivory-100/70 text-[14px] mt-3 leading-relaxed">Banjara Hills · Jubilee Hills · Kondapur · Madhapur · Gachibowli · Kukatpally · HITEC City</div>
                  <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ivory-100/10 text-[12px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-anarared-500 animate-pulse" /> Active
                  </div>
                </div>
                {["Bengaluru", "Mumbai", "Pune", "Chennai", "Delhi NCR", "Kolkata"].map((c) => (
                  <div key={c} className="rounded-3xl bg-white border border-sage-100 p-5 flex flex-col justify-between min-h-[110px]">
                    <MapPin className="w-4 h-4 text-sage-400" />
                    <div>
                      <div className="font-serif text-[18px] text-ink">{c}</div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-ink-muted mt-1">Expanding soon</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ APP COMING SOON ============ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-sage-600 to-[#2F4338] text-ivory-100 p-10 sm:p-16 lg:p-20">
            <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-gold-500/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-ivory-100/10 blur-3xl" />
            <div className="relative grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="text-[11px] uppercase tracking-[0.22em] text-gold-500 inline-flex items-center gap-2">
                  <span className="w-6 h-px bg-gold-500" /> Coming soon
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-[60px] leading-[1.05] mt-5 text-ivory-100">
                  The Anara app is on the way.
                </h2>
                <p className="text-ivory-100/75 mt-6 max-w-xl leading-relaxed">
                  Discover care services, connect with verified professionals and manage appointments — all from one quietly designed app.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-ivory-100/10 border border-ivory-100/15 text-[13px]">
                    <Apple className="w-4 h-4" /> iOS
                  </div>
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-ivory-100/10 border border-ivory-100/15 text-[13px]">
                    <Smartphone className="w-4 h-4" /> Android
                  </div>
                </div>

                {!notifyDone ? (
                  <form onSubmit={submitNotify} data-testid="notify-form" className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
                    <input
                      type="email"
                      required
                      value={notifyEmail}
                      onChange={(e) => setNotifyEmail(e.target.value)}
                      placeholder="your@email.com"
                      data-testid="notify-email-input"
                      className="flex-1 bg-ivory-100/10 border border-ivory-100/15 focus:border-ivory-100/40 outline-none rounded-full px-5 py-3.5 text-ivory-100 placeholder:text-ivory-100/40 backdrop-blur-sm"
                    />
                    <button
                      type="submit"
                      disabled={notifyLoading}
                      data-testid="notify-submit"
                      className="inline-flex items-center justify-center gap-2 bg-ivory-100 text-ink hover:bg-white rounded-full px-6 py-3.5 text-[14.5px] font-medium transition-all hover:-translate-y-0.5"
                    >
                      {notifyLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Notify me"}
                    </button>
                  </form>
                ) : (
                  <div data-testid="notify-success" className="mt-8 inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-ivory-100/10 border border-ivory-100/15">
                    <CheckCircle2 className="w-4 h-4 text-gold-500" /> You're on the list.
                  </div>
                )}
              </div>
              <div className="lg:col-span-5">
                <div className="relative mx-auto w-[230px] aspect-[9/19] rounded-[2.5rem] bg-gradient-to-b from-ivory-100/15 to-ivory-100/5 border border-ivory-100/20 backdrop-blur-md p-3 shadow-2xl animate-float">
                  <div className="w-full h-full rounded-[2rem] bg-[#0F1612] overflow-hidden flex flex-col">
                    <div className="px-5 py-6 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-ivory-100 flex items-center justify-center">
                        <img src={BRAND.logo} className="w-full h-full object-contain" alt="logo" />
                      </div>
                      <div className="text-ivory-100 font-serif text-[15px]">Anara</div>
                    </div>
                    <div className="px-5">
                      <div className="text-ivory-100/60 text-[10px] uppercase tracking-[0.18em]">Hi Priya</div>
                      <div className="text-ivory-100 font-serif text-[20px] leading-tight mt-1">Which chapter do you need today?</div>
                    </div>
                    <div className="px-5 mt-5 grid grid-cols-2 gap-2.5">
                      {SERVICES.map((s) => (
                        <div key={s.key} className="rounded-2xl bg-ivory-100/8 border border-ivory-100/10 p-3">
                          <div className="text-ivory-100 text-[11px] font-serif">{s.title}</div>
                          <div className="text-ivory-100/50 text-[9px] mt-1">Available</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto p-5">
                      <div className="rounded-2xl bg-gold-500/15 border border-gold-500/30 p-3">
                        <div className="text-gold-500 text-[10px] uppercase tracking-[0.18em]">Today</div>
                        <div className="text-ivory-100 text-[12px] mt-1">Anjali · 4:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-5xl sm:text-6xl lg:text-[72px] leading-[1.02] tracking-tight text-ink"
          >
            Ready to find{" "}
            <span className="serif-italic-emph">trusted care?</span>
          </motion.h2>
          <p className="mt-6 text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Talk to an Anara care coordinator. We'll listen, understand, and gently match you with the right professional.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/signup"
              data-testid="final-cta-book"
              className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white rounded-full px-7 py-4 text-[15px] font-medium transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              Sign Up
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              data-testid="final-cta-contact"
              className="inline-flex items-center gap-2 bg-white border border-sage-200 hover:border-sage-400 text-ink rounded-full px-7 py-4 text-[15px] font-medium transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
