import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { BRAND, SERVICES } from "../lib/brand";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "#services", isDropdown: true },
  { label: "Careers", to: "/careers" },
  
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory-100/85 backdrop-blur-xl border-b border-sage-100/60 shadow-[0_8px_30px_-12px_rgba(95,125,105,0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" data-testid="nav-logo-link" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl overflow-hidden bg-white shadow-soft ring-1 ring-sage-100 flex items-center justify-center">
              <img src={BRAND.logo} alt="Anara Lifethread" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-serif text-[17px] tracking-tight text-ink">{BRAND.short} <span className="text-sage-600">Lifethread</span></span>
              <span className="text-[10.5px] uppercase tracking-[0.18em] text-ink-muted mt-1">Family Care · Hyderabad</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) =>
              item.isDropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    data-testid="nav-services-button"
                    className="inline-flex items-center gap-1 px-4 py-2 text-[14.5px] text-ink hover:text-sage-600 transition-colors"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.22 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[480px]"
                      >
                        <div className="rounded-3xl bg-white border border-sage-100 shadow-lift p-3 grid grid-cols-2 gap-1">
                          {SERVICES.map((s) => (
                            <Link
                              key={s.key}
                              to={s.path}
                              data-testid={`nav-services-${s.key}`}
                              className="group p-4 rounded-2xl hover:bg-ivory-100 transition-colors"
                            >
                              <div className="text-[15px] font-medium font-serif text-ink group-hover:text-sage-600">
                                {s.title}
                              </div>
                              <div className="text-[13px] text-ink-muted mt-1 leading-relaxed">{s.short}</div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  data-testid={`nav-${item.label.toLowerCase()}-link`}
                  className={({ isActive }) =>
                    `px-4 py-2 text-[14.5px] transition-colors ${
                      isActive ? "text-sage-600" : "text-ink hover:text-sage-600"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
           <Link
  to="/signup"
  data-testid="mobile-nav-sign-up-cta"
  className="mt-4 inline-flex items-center justify-center bg-sage-600 text-white rounded-full px-5 py-3 text-[15px] font-medium"
>
  Sign Up
</Link>
          </div>

          <button
            data-testid="nav-mobile-toggle"
            className="lg:hidden p-2 rounded-xl text-ink hover:bg-ivory-200"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-ivory-100/95 backdrop-blur-xl border-t border-sage-100"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {NAV.filter((n) => !n.isDropdown).map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                  className="py-3 text-[16px] text-ink border-b border-sage-100/60"
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-2">
                <div className="text-xs uppercase tracking-widest text-ink-muted mb-2">Services</div>
                {SERVICES.map((s) => (
                  <NavLink
                    key={s.key}
                    to={s.path}
                    data-testid={`mobile-nav-${s.key}`}
                    className="block py-2.5 text-[15px] text-ink"
                  >
                    {s.title}
                  </NavLink>
                ))}
              </div>
              <Link
  to="/signup"
  data-testid="mobile-nav-sign-up-cta"
  className="mt-4 inline-flex items-center justify-center bg-sage-600 text-white rounded-full px-5 py-3 text-[15px] font-medium"
>
  Sign Up
</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
