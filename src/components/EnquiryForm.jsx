import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";
//import { submitEnquiry } from "../lib/api";

const TIME_OPTIONS = [
  "Morning (9am – 12pm)",
  "Afternoon (12pm – 4pm)",
  "Evening (4pm – 8pm)",
  "Anytime",
];

export default function EnquiryForm({ service, serviceTitle, careForLabel = "Who is the care for?", careForPlaceholder = "e.g. 6-month old daughter" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    care_for: "",
    preferred_time: TIME_OPTIONS[3],
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
      console.log({ ...form, service });
      setDone(true);
      toast.success("Enquiry received. We'll be in touch within 24 hours.");
      setForm({ name: "", email: "", phone: "", care_for: "", preferred_time: TIME_OPTIONS[3], message: "" });
    } catch (err) {
      toast.error(err?.response?.data?.detail?.[0]?.msg || "Could not send your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-white p-10 sm:p-14 border border-sage-100 shadow-soft text-center"
        data-testid={`enquiry-success-${service}`}
      >
        <div className="w-14 h-14 rounded-full bg-sage-50 mx-auto flex items-center justify-center text-sage-600">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-3xl mt-6 text-ink">Thank you</h3>
        <p className="text-ink-muted mt-3 max-w-md mx-auto">
          A care coordinator will reach out to you within 24 hours to schedule your consultation for {serviceTitle}.
        </p>
        <button
          onClick={() => setDone(false)}
          data-testid={`enquiry-reset-${service}`}
          className="mt-8 text-sage-600 text-sm underline underline-offset-4"
        >
          Submit another enquiry
        </button>
      </motion.div>
    );
  }

 return (
  <div>
    <h2>Enquiry Form Loaded</h2>
  </div>
);
}