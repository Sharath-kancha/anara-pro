import ServicePage from "../components/ServicePage";

const features = [
  { title: "Trained babysitters", body: "Structured onboarding in newborn safety, child psychology and play-based care." },
  { title: "Child safety first", body: "Every caregiver is identity-verified, background-checked and reference-screened." },
  { title: "Flexible schedules", body: "Hourly, daily, weekly or live-in — we adapt to your family's rhythm." },
  { title: "In-home care", body: "Care delivered in the comfort of your home, on your terms." },
  { title: "Engaging activities", body: "Age-appropriate play, reading and learning — designed for development, not just supervision." },
  { title: "Emergency support", body: "Coordinator on call, with rapid backup and 24/7 support for parents." },
];

const inclusions = [
  "Initial in-home meet & match",
  "Personalised child care plan",
  "Daily activity log (optional)",
  "Coordinator-led quality checks",
  "Continuity of caregiver",
  "Replacement guarantee",
  "Photo/video privacy controls",
  "Sick-day backup support",
];

const faqs = [
  { q: "How are babysitters verified?", a: "Identity verification, address proof, reference checks, criminal background screening and an in-person interview. Continuous compliance after onboarding." },
  { q: "Can I meet the babysitter before they begin?", a: "Yes. We arrange a brief, no-obligation introduction at your home so you can be sure of the fit before care begins." },
  { q: "What age groups are supported?", a: "From newborns to children up to 12 years. We match babysitters to the developmental needs of your child." },
  { q: "What if my babysitter is unavailable?", a: "Your coordinator arranges a verified backup so your day isn't disrupted. Continuity is something we take very seriously." },
  { q: "Are emergency situations covered?", a: "Every Anara caregiver is trained in basic emergency response and has a direct line to our coordinator team." },
  { q: "How does pricing work?", a: "Pricing is shared after your consultation, customised to your schedule and care plan. There are no hidden fees." },
];

export default function Babysitting() {
  return (
    <ServicePage
      serviceKey="babysitting"
      serviceTitle="Babysitting"
      eyebrow="Babysitting"
      heroTitle="Trusted childcare for"
      heroEmph="modern families."
      heroSubtitle="In-home, verified, trained babysitters who treat your child like family — and free up the rest of your day to breathe."
      heroImage="https://images.unsplash.com/photo-1581952976147-5a2d15560349?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400"
      features={features}
      inclusions={inclusions}
      faqs={faqs}
      careForLabel="About your child"
      careForPlaceholder="e.g. 2-year-old daughter, weekdays mornings"
    />
  );
}
