import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { BRAND, SERVICES } from "../lib/brand";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative bg-[#1F2A23] text-ivory-100 mt-32">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sage-300/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/95 flex items-center justify-center">
              <img src={BRAND.logo} alt="Anara" className="w-full h-full object-contain" />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-xl text-ivory-100">Anara <span className="text-gold-500">Lifethread</span></div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-ivory-100/60 mt-1">Supporting Every Chapter</div>
            </div>
          </Link>
          <p className="mt-6 text-ivory-100/70 leading-relaxed max-w-md text-[15px]">
            India&apos;s trusted family care ecosystem — connecting families in Hyderabad with verified
            babysitters, caregivers, therapists and postpartum specialists. Quietly building the gentlest
            standard of care, one family at a time.
          </p>
          </div>
        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-5">Company</div>
          <ul className="space-y-3 text-[15px] text-ivory-100/80">
            <li><Link to="/about" className="hover:text-ivory-100 link-underline">About</Link></li>
            <li><Link to="/careers" className="hover:text-ivory-100 link-underline">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-ivory-100 link-underline">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-ivory-100 link-underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-ivory-100 link-underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-5">Services</div>
          <ul className="space-y-3 text-[15px] text-ivory-100/80">
            {SERVICES.map((s) => (
              <li key={s.key}>
                <Link to={s.path} className="hover:text-ivory-100 link-underline">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-5">Talk to us</div>
          <ul className="space-y-4 text-[15px] text-ivory-100/85">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-1 text-gold-500" />
              <a href={BRAND.phoneHref} className="hover:text-ivory-100">{BRAND.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="w-4 h-4 mt-1 text-gold-500" />
              <a href={BRAND.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-ivory-100">WhatsApp · {BRAND.whatsapp}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-1 text-gold-500" />
              <a href={BRAND.emailHref} className="hover:text-ivory-100">{BRAND.email}</a>
            </li>
            <li className="text-ivory-100/65 mt-2">{BRAND.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory-100/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-ivory-100/55">
          <div>© {new Date().getFullYear()} Anara Lifethread. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            Built with care in Hyderabad
          </div>
        </div>
      </div>
    </footer>
  );
}
