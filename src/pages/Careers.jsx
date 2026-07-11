import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, Loader2, CheckCircle2, Sparkles, GraduationCap, ShieldCheck, HeartHandshake } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { submitEnquiry } from "../lib/api";

const ROLES = [
  { v: "babysitter", label: "Babysitter / Nanny" },
  { v: "caregiver", label: "Elder Caregiver" },
  { v: "therapist", label: "Therapist / Clinical Psychologist" },
  { v: "postpartum_specialist", label: "Postpartum Specialist" },
  { v: "other", label: "Other / Coordinator" },
];

const BENEFITS = [
  { icon: HeartHandshake, title: "Respect & dignity", body: "We treat caregivers as professionals — with fair pay, clear contracts and steady work." },
  { icon: GraduationCap, title: "Continuous training", body: "Structured onboarding, ongoing learning and senior mentor support." },
  { icon: ShieldCheck, title: "Safe placements", body: "Family screening, agreed boundaries and coordinator support on every assignment." },
  { icon: Sparkles, title: "A real career", body: "Grow into senior roles, specialist tracks and coordinator opportunities as we scale." },
];

export default function Careers() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    role: ROLES[0].v,
    city: "Hyderabad",
    experience_years: "",
    qualifications: "",
    resume_link: "",
    cover_note: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.phone) {
      toast.error("Please fill in name, email and phone.");
      return;
    }
    setLoading(true);
    try {
     await submitEnquiry({
  ...form,
  source: "career_page",
});
      setDone(true);
      toast.success("Application received. Our team will review and reach out.");
    } catch (err) {
      toast.error(err?.response?.data?.detail?.[0]?.msg || "Could not submit your application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="page-careers">
      <section className="relative overflow-hidden">
        <div className="sage-gradient absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-20 sm:pt-24 sm:pb-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.22em] text-sage-600 inline-flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-sage-300" /> Careers
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl sm:text-6xl lg:text-[76px] leading-[0.98] tracking-tight text-ink"
            >
              Become an Anara{" "}
              <span className="serif-italic-emph">professional.</span>
            </motion.h1>
            <p className="mt-7 text-lg text-ink-muted leading-relaxed max-w-xl">
              We are quietly building a community of India's most caring babysitters, caregivers, therapists and postpartum specialists. If care is your craft, we'd love to meet you.
            </p>
            <a
              href="#apply"
              data-testid="careers-cta-apply"
              className="mt-10 inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white rounded-full px-7 py-4 text-[15px] font-medium transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              Apply now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-lift">
              <img
                src="https://images.pexels.com/photos/7345443/pexels-photo-7345443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900"
                alt="Caregiver"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Why work at Anara"
            title="Care, delivered with"
            emph="respect — both ways."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-3xl p-7 bg-ivory-100/60 border border-sage-100"
                data-testid={`benefit-${i}`}
              >
                <div className="w-11 h-11 rounded-2xl bg-white text-sage-600 shadow-soft border border-sage-100 flex items-center justify-center">
                  <b.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl mt-5 text-ink">{b.title}</h3>
                <p className="text-[14px] text-ink-muted mt-2 leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Training & onboarding"
              title="A real onboarding,"
              emph="for real care."
              subtitle="Every Anara professional goes through a structured onboarding programme before their first family — built around safety, empathy and confidence."
            />
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              { step: "01", title: "Documentation & verification", body: "ID, address, references and background checks." },
              { step: "02", title: "Skills & safety training", body: "Care-specific modules, emergency response, communication." },
              { step: "03", title: "Shadowing & mentorship", body: "Paired with a senior caregiver / clinician for early shifts." },
              { step: "04", title: "Continuous quality", body: "Coordinator reviews, family feedback, ongoing learning." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-3xl bg-white border border-sage-100 p-7"
              >
                <div className="font-serif text-2xl text-sage-600">{s.step}</div>
                <div className="font-serif text-xl text-ink mt-4">{s.title}</div>
                <div className="text-[14px] text-ink-muted mt-2 leading-relaxed">{s.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section id="apply" className="py-24 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
  align="center"
  eyebrow="Application"
  title="Tell us about"
  emph="yourself."
  subtitle="Share a few details and a link to your resume. Our team reviews every application personally."
/>

          {done ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-14 rounded-3xl bg-ivory-100/60 p-10 sm:p-14 border border-sage-100 text-center"
              data-testid="careers-success"
            >
              <div className="w-14 h-14 rounded-full bg-white mx-auto flex items-center justify-center text-sage-600 border border-sage-100">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-3xl mt-6 text-ink">Thank you.</h3>
              <p className="text-ink-muted mt-3 max-w-md mx-auto">
                Your application is in. Our team will personally review it and reach out within 5 working days.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={submit}
              data-testid="careers-form"
              className="mt-14 rounded-3xl bg-ivory-100/60 p-7 sm:p-10 border border-sage-100 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-ink-muted">Full name</label>
                  <input className="anara-input mt-1.5" value={form.full_name} onChange={update("full_name")} placeholder="Your full name" data-testid="careers-name" />
                </div>
                <div>
                  <label className="text-xs text-ink-muted">Phone</label>
                  <input className="anara-input mt-1.5" value={form.phone} onChange={update("phone")} placeholder="+91 …" data-testid="careers-phone" />
                </div>
              </div>
              <div>
                <label className="text-xs text-ink-muted">Email</label>
                <input type="email" className="anara-input mt-1.5" value={form.email} onChange={update("email")} placeholder="you@example.com" data-testid="careers-email" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-ink-muted">Role you're applying for</label>
                  <select className="anara-input mt-1.5" value={form.role} onChange={update("role")} data-testid="careers-role">
                    {ROLES.map((r) => <option key={r.v} value={r.v}>{r.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-ink-muted">City</label>
                  <input className="anara-input mt-1.5" value={form.city} onChange={update("city")} placeholder="Hyderabad" data-testid="careers-city" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-ink-muted">Years of experience</label>
                  <input type="number" min="0" className="anara-input mt-1.5" value={form.experience_years} onChange={update("experience_years")} placeholder="e.g. 4" data-testid="careers-experience" />
                </div>
                <div>
                  <label className="text-xs text-ink-muted">Qualifications</label>
                  <input className="anara-input mt-1.5" value={form.qualifications} onChange={update("qualifications")} placeholder="Certifications / degrees" data-testid="careers-qualifications" />
                </div>
              </div>
              <div>
                <label className="text-xs text-ink-muted">Resume link <span className="text-ink-muted/60">(Google Drive / Dropbox / LinkedIn)</span></label>
                <input className="anara-input mt-1.5" value={form.resume_link} onChange={update("resume_link")} placeholder="https://…" data-testid="careers-resume" />
              </div>
              <div>
                <label className="text-xs text-ink-muted">A short note about you</label>
                <textarea rows={4} className="anara-input mt-1.5 resize-none" value={form.cover_note} onChange={update("cover_note")} placeholder="Tell us about your care experience and why Anara feels right." data-testid="careers-note" />
              </div>
              <button
                type="submit"
                disabled={loading}
                data-testid="careers-submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-sage-600 hover:bg-sage-700 disabled:opacity-60 text-white rounded-full px-6 py-4 text-[15px] font-medium transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</> : "Submit application"}
              </button>
              <p className="text-[11.5px] text-ink-muted/80 text-center">
                Your details are reviewed confidentially by our recruitment team.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
