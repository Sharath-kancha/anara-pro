// Brand constants for Anara Life Thread
export const BRAND = {
  name: "Anara Lifethread",
  short: "Anara",
  tagline: "Supporting Every Chapter of Life",
  logo: "https://customer-assets.emergentagent.com/job_e273245d-e612-4d60-bf93-edd6592c781d/artifacts/uf99ybxi_image.png",
  city: "Hyderabad, India",
  phone: "+91 97045 37373",
  phoneHref: "tel:+919704537373",
  whatsapp: "+91 97045 37373",
  whatsappHref: "https://wa.me/919704537373",
  email: "hello@anaralifethread.com",
  emailHref: "mailto:hello@anaralifethread.com",
  address: "Hyderabad, Telangana, India",
  social: {
    instagram: "https://instagram.com/anaralifethread",
    linkedin: "https://linkedin.com/company/anaralifethread",
    facebook: "https://facebook.com/anaralifethread",
  },
};

export const SERVICES = [
  {
    key: "babysitting",
    title: "Babysitting",
    path: "/babysitting",
    short: "Trained, verified caregivers for modern families.",
    description:
      "Reliable in-home childcare with trained, background-verified babysitters who treat your child like family.",
    image:
      "${process.env.PUBLIC_URL}/images/babysitting-hero.png",
    accent: "from-sage-100 to-ivory-100",
  },
  {
    key: "elder_care",
    title: "Elder Care",
    path: "/elder-care",
    short: "Compassionate companionship & daily support.",
    description:
      "Dignified, attentive elder care — companionship, mobility support, medication reminders and gentle daily assistance.",
    image:
      "${process.env.PUBLIC_URL}/images/elder-care-hero.png",
    accent: "from-ivory-200 to-sage-50",
  },
  {
    key: "therapy",
    title: "Therapy",
    path: "/therapy",
    short: "Confidential mental wellness, on your terms.",
    description:
      "Licensed therapists for individuals, couples and families — for stress, anxiety, relationships and everyday wellbeing.",
    image:
      "${process.env.PUBLIC_URL}/images/therapy-hero.png",
    accent: "from-sage-50 to-ivory-200",
  },
  {
    key: "postpartum",
    title: "Postpartum Support",
    path: "/postpartum",
    short: "Care for mothers, through every transition.",
    description:
      "Emotional, physical and mental wellness support for new mothers — with empathy, privacy and professional guidance.",
    image:
      "${process.env.PUBLIC_URL}/images/postpartum-hero.png",
    accent: "from-ivory-100 to-sage-100",
  },
];

export const TRUST_PILLARS = [
  { title: "Verified Professionals", body: "Every caregiver passes identity, address and reference checks." },
  { title: "Background Verification", body: "Multi-step screening with continuous compliance monitoring." },
  { title: "Trained Caregivers", body: "Structured onboarding for safety, empathy and emergency care." },
  { title: "Qualified Therapists", body: "Licensed clinicians, supervised quality, confidential sessions." },
  { title: "Personalized Care Plans", body: "Every family gets a plan built for them — never templated." },
  { title: "Flexible Scheduling", body: "Hourly, daily, weekly or live-in — on a rhythm that fits you." },
  { title: "Compassionate Support", body: "Care begins with warmth. We hire for empathy, then train the skill." },
  { title: "Privacy & Confidentiality", body: "Your story stays yours. Strict data and conversation privacy." },
];

export const HOW_STEPS = [
  { n: "01", title: "Choose a Service", body: "Pick the chapter of life you need support with — childcare, elder care, therapy or postpartum." },
  { n: "02", title: "Book a Consultation", body: "A short, no-pressure conversation to understand your family's needs." },
  { n: "03", title: "Get Matched", body: "We hand-pair you with a verified, trained professional suited to your context." },
  { n: "04", title: "Begin Your Journey", body: "Care begins. We stay close — quality checks, support and continuity." },
];

export const TESTIMONIALS = [
  {
    quote:
      "The babysitter Anara sent felt like family from day one. We finally have peace of mind when we leave for work.",
    name: "Priya & Rahul",
    role: "Parents · Banjara Hills",
  },
  {
    quote:
      "My father lights up when his Anara caregiver arrives. It's not just help — it's companionship he genuinely looks forward to.",
    name: "Aditya N.",
    role: "Son & primary caregiver",
  },
  {
    quote:
      "Three sessions in and my therapist already feels like the most grounded space in my week. Quiet, professional, kind.",
    name: "Meera S.",
    role: "Working professional",
  },
  {
    quote:
      "After delivery, I was lost. The postpartum support team showed up with real warmth and zero judgement. I will never forget it.",
    name: "Aisha K.",
    role: "New mother",
  },
  {
    quote:
      "What struck us was the verification process. Documents, references, background — they earned our trust before we even met.",
    name: "The Reddy Family",
    role: "Jubilee Hills",
  },
];
