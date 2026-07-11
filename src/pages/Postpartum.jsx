import ServicePage from "../components/ServicePage";

const features = [
  {
    title: "Emotional Wellbeing",
    body: "Calm, trained support for the emotional weight of new motherhood.",
  },
  {
    title: "Postpartum Mental Wellness",
    body: "Specialised therapists for postpartum mood, anxiety and identity transitions.",
  },
  {
    title: "Guidance & Education",
    body: "Trusted information on newborn care, recovery and self-care.",
  },
  {
    title: "Professional Consultations",
    body: "Access to lactation, sleep and recovery experts when needed.",
  },
  {
    title: "Safe & Confidential",
    body: "Privacy-first care — your story stays yours, always.",
  },
  {
    title: "Family-Inclusive Support",
    body: "Sessions for partners and family to gently support the new mother.",
  },
];

const inclusions = [
  "In-home postpartum visits",
  "Mental health check-ins",
  "Lactation & nutrition guidance",
  "Sleep and recovery support",
  "Therapist on call",
  "Partner & family briefings",
  "Newborn care coaching",
  "Privacy-first protocols",
];

const faqs = [
  {
    q: "How soon after delivery can I begin?",
    a: "From the day you return home, if you wish. Our specialists begin gently, at your pace.",
  },
  {
    q: "Is this only for new mothers?",
    a: "Primarily yes, but partners and immediate family can also be included whenever appropriate.",
  },
  {
    q: "Are the sessions clinical?",
    a: "Anara combines emotional support, structured wellness check-ins and access to licensed professionals whenever required.",
  },
  {
    q: "Is everything confidential?",
    a: "Absolutely. Your privacy is respected throughout your postpartum journey.",
  },
  {
    q: "Do you support second-time mothers?",
    a: "Yes. Every postpartum journey is unique, and our support is tailored accordingly.",
  },
  {
    q: "What if I just need someone to talk to?",
    a: "Sometimes that's the most important step. We're here to listen with compassion and without judgement.",
  },
];

export default function Postpartum() {
  return (
    <ServicePage
      serviceKey="postpartum"
      serviceTitle="Postpartum Support"
      eyebrow="Postpartum Support"
      heroTitle="Supporting mothers through"
      heroEmph="every transition."
      heroSubtitle="Emotional, mental and practical postpartum support — delivered with empathy, privacy and professional care."
      heroImage="https://images.unsplash.com/photo-1582486225644-aeacf6aa0b1b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400"
      features={features}
      inclusions={inclusions}
      faqs={faqs}
      careForLabel="About you"
      careForPlaceholder="e.g. 6 weeks postpartum, looking for emotional support"
    />
  );
}