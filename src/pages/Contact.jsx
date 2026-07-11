import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
} from "lucide-react";
//import SectionHeading from "../components/SectionHeading";
import { BRAND, SERVICES } from "../lib/brand";
import { submitEnquiry } from "../lib/api";
const SERVICE_OPTIONS = [
  { v: "", label: "Choose a service (optional)" },
  ...SERVICES.map((s) => ({ v: s.title, label: s.title })),
  { v: "general", label: "General enquiry" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    city: "Hyderabad",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please add your name, email and phone.");
      return;
    }
    setLoading(true);
    try {
      // Save both as a consultation and as a contact message
      await submitEnquiry({
  name: form.name,
  email: form.email,
  phone: form.phone,
  service: form.service,
  city: form.city,
  message: form.message,
  source: "contact_page",
});

setDone(true);
toast.success(
  "Your message is with us. A coordinator will respond within 24 hours."
);
      setDone(true);
      toast.success("Your message is with us. A coordinator will respond within 24 hours.");
    } catch (err) {
      toast.error(err?.response?.data?.detail?.[0]?.msg || "Could not send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="page-contact">
      <section className="relative overflow-hidden">
        <div className="sage-gradient absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12 sm:pt-24 sm:pb-16">
          <div className="text-[11px] uppercase tracking-[0.22em] text-sage-600 mb-6 inline-flex items-center gap-2">
            <span className="w-6 h-px bg-sage-300" /> Contact
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl lg:text-[80px] leading-[0.98] tracking-tight text-ink max-w-4xl"
          >
            Talk to a care{" "}
            <span className="serif-italic-emph">coordinator.</span>
          </motion.h1>
          <p className="mt-6 text-lg text-ink-muted leading-relaxed max-w-2xl">
            Whether you're looking for care, recommending us to a friend, or simply curious — we're here, quietly, in Hyderabad. Reach out any way you like.
          </p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10">
          {/* LEFT: Contact details */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-3xl bg-white border border-sage-100 p-7 shadow-soft">
              <div className="text-[11px] uppercase tracking-[0.22em] text-sage-600 mb-5">Reach us</div>
              <ul className="space-y-5">
                <li className="flex items-start gap-4" data-testid="contact-phone">
                  <div className="w-11 h-11 rounded-2xl bg-sage-50 text-sage-600 flex items-center justify-center"><Phone className="w-5 h-5" /></div>
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.16em] text-ink-muted">Phone</div>
                    <a href={BRAND.phoneHref} className="font-serif text-xl text-ink mt-0.5 block">{BRAND.phone}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4" data-testid="contact-whatsapp">
                  <div className="w-11 h-11 rounded-2xl bg-sage-50 text-sage-600 flex items-center justify-center"><MessageCircle className="w-5 h-5" /></div>
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.16em] text-ink-muted">WhatsApp</div>
                    <a href={BRAND.whatsappHref} target="_blank" rel="noreferrer" className="font-serif text-xl text-ink mt-0.5 block">{BRAND.whatsapp}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4" data-testid="contact-email">
                  <div className="w-11 h-11 rounded-2xl bg-sage-50 text-sage-600 flex items-center justify-center"><Mail className="w-5 h-5" /></div>
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.16em] text-ink-muted">Email</div>
                    <a href={BRAND.emailHref} className="font-serif text-xl text-ink mt-0.5 block break-all">{BRAND.email}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4" data-testid="contact-address">
                  <div className="w-11 h-11 rounded-2xl bg-sage-50 text-sage-600 flex items-center justify-center"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.16em] text-ink-muted">Office</div>
                    <div className="font-serif text-xl text-ink mt-0.5">{BRAND.address}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-sage-50 text-sage-600 flex items-center justify-center"><Clock className="w-5 h-5" /></div>
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.16em] text-ink-muted">Hours</div>
                    <div className="font-serif text-xl text-ink mt-0.5">Mon – Sat · 9:00 AM – 8:00 PM</div>
                  </div>
                </li>
              </ul>
              <div className="border-t border-sage-100 mt-7 pt-6 flex items-center gap-3">
                <a
  href={BRAND.social.instagram}
  target="_blank"
  rel="noreferrer"
  className="w-10 h-10 rounded-full bg-ivory-100 hover:bg-sage-50 flex items-center justify-center"
>
  📷
</a>
                <a
  href={BRAND.social.linkedin}
  target="_blank"
  rel="noreferrer"
  className="w-10 h-10 rounded-full bg-ivory-100 hover:bg-sage-50 flex items-center justify-center"
>
  in
</a>
                <a
  href={BRAND.social.facebook}
  target="_blank"
  rel="noreferrer"
  className="w-10 h-10 rounded-full bg-ivory-100 hover:bg-sage-50 flex items-center justify-center"
>
  f
</a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-sage-100 aspect-[4/3] bg-ivory-100">
              <iframe
                title="Hyderabad map"
                src="https://www.google.com/maps?q=Hyderabad,Telangana,India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="contact-map"
              />
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-7">
            {done ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl bg-white border border-sage-100 p-10 sm:p-14 shadow-soft text-center"
                data-testid="contact-success"
              >
                <div className="text-4xl">✅</div>
                <h3 className="font-serif text-3xl mt-6 text-ink">Thank you for reaching out.</h3>
                <p className="text-ink-muted mt-3 max-w-md mx-auto">
                  An Anara coordinator will be in touch within 24 hours. For urgent enquiries, call or WhatsApp us at {BRAND.phone}.
                </p>
                <button onClick={() => setDone(false)} className="mt-8 text-sage-600 text-sm underline underline-offset-4">Send another message</button>
              </motion.div>
            ) : (
              <form
                onSubmit={submit}
                data-testid="contact-form"
                className="rounded-3xl bg-white border border-sage-100 p-7 sm:p-10 shadow-soft space-y-5"
              >
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-sage-600 mb-2">Consultation</div>
                  <h3 className="font-serif text-3xl text-ink leading-tight">Tell us how we can help.</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-ink-muted">Full name</label>
                    <input className="anara-input mt-1.5" value={form.name} onChange={update("name")} placeholder="Your full name" data-testid="contact-name" />
                  </div>
                  <div>
                    <label className="text-xs text-ink-muted">Phone</label>
                    <input className="anara-input mt-1.5" value={form.phone} onChange={update("phone")} placeholder="+91 …" data-testid="contact-phone-input" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-ink-muted">Email</label>
                    <input type="email" className="anara-input mt-1.5" value={form.email} onChange={update("email")} placeholder="you@example.com" data-testid="contact-email-input" />
                  </div>
                  <div>
                    <label className="text-xs text-ink-muted">City</label>
                    <input className="anara-input mt-1.5" value={form.city} onChange={update("city")} placeholder="Hyderabad" data-testid="contact-city" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-ink-muted">Service of interest</label>
                  <select className="anara-input mt-1.5" value={form.service} onChange={update("service")} data-testid="contact-service">
                    {SERVICE_OPTIONS.map((o) => <option key={o.label} value={o.v}>{o.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-ink-muted">Message</label>
                  <textarea rows={5} className="anara-input mt-1.5 resize-none" value={form.message} onChange={update("message")} placeholder="Anything we should know before we get in touch…" data-testid="contact-message" />
                </div>
              <button
  type="submit"
  disabled={loading}
  data-testid="contact-submit"
  className="w-full inline-flex items-center justify-center gap-2 bg-sage-600 hover:bg-sage-700 disabled:opacity-60 text-white rounded-full px-6 py-4 text-[15px] font-medium transition-all hover:-translate-y-0.5 hover:shadow-lift"
>
  {loading ? "Sending..." : "Send Message"}
</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
