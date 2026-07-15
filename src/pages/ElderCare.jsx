import ServicePage from "../components/ServicePage";

const features = [
  { title: "Daily assistance", body: "Bathing, dressing, meals, mobility and gentle help with daily routines." },
  { title: "Medication reminders", body: "Structured schedules and gentle, dignified reminders for medication adherence." },
  { title: "Companionship", body: "Conversations, walks, shared interests — care that's emotionally present, not transactional." },
  { title: "Mobility support", body: "Safe, attentive support for movement, transfers and accompaniment to appointments." },
  { title: "Emotional wellbeing", body: "Trained to spot loneliness, low mood and signs that need clinical attention." },
  { title: "Family communication", body: "Regular updates and transparent communication with primary family caregivers." },
];

const inclusions = [
  "Coordinator-led care plan",
  "In-home initial assessment",
  "Medication & vitals tracking",
  "Doctor visit accompaniment",
  "Hygiene and meal support",
  "Companionship hours",
  "Light household assistance",
  "Family check-ins each week",
];

const faqs = [
  { q: "Are your elder caregivers medically trained?", a: "Our caregivers are trained in non-clinical eldercare. For medical procedures, we coordinate with licensed nurses or doctors as part of your care plan." },
  { q: "Do you provide 24/7 live-in care?", a: "Yes. We offer hourly visits, day shifts, night shifts and live-in care arrangements depending on your family's needs." },
  { q: "Can the caregiver accompany my parent to the hospital?", a: "Absolutely. Appointment accompaniment, transport coordination and family reporting are part of our standard service." },
  { q: "How are caregivers matched?", a: "We match on language, temperament, experience, location and the specific needs of your loved one. You're always part of the decision." },
  { q: "What about dementia or specialised conditions?", a: "Specialised care plans are available for conditions like dementia, Parkinson's and post-surgery recovery, supervised by senior coordinators." },
  { q: "Is there a long-term commitment?", a: "No. Plans are flexible. We earn continuity through quality, not contracts." },
];

export default function ElderCare() {
  return (
   <ServicePage
  serviceKey="elder_care"
  serviceTitle="Elder Care"
  eyebrow="Elder Care"
  heroTitle="Compassionate care for"
  heroEmph="loved ones."
  heroSubtitle="Compassionate, dignified in-home support for seniors — from daily assistance and companionship to mobility support and family coordination, helping your loved ones live safely and comfortably."
  heroImage="${process.env.PUBLIC_URL}/images/elder-care-hero.png"
  features={features}
  inclusions={inclusions}
  faqs={faqs}
  careForLabel="About your loved one"
  careForPlaceholder="e.g. Father, 72 yrs, needs daily companionship"
/>
  );
}
