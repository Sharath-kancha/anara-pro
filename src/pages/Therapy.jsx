import ServicePage from "../components/ServicePage";

const features = [
  {
    title: "Individual Therapy",
    body: "Confidential, evidence-based support for stress, anxiety, low mood and life transitions.",
  },
  {
    title: "Couples Therapy",
    body: "A calm, neutral space for partners to listen, repair and rebuild together.",
  },
  {
    title: "Mental Wellness",
    body: "Preventive, ongoing care for everyday emotional wellbeing—not just crisis.",
  },
  {
    title: "Stress Management",
    body: "Practical tools, mindfulness and structured plans for overwhelmed lives.",
  },
  {
    title: "Anxiety Support",
    body: "Trauma-informed, gentle therapy with licensed clinicians.",
  },
  {
    title: "Relationship Counselling",
    body: "Family, intergenerational and relationship-focused therapy.",
  },
];

const inclusions = [
  "Licensed clinical psychologists",
  "In-person or video sessions",
  "Confidential, encrypted records",
  "Personalised treatment plan",
  "Therapist matching consultation",
  "Couples & family sessions",
  "Crisis escalation pathway",
  "Continuity of therapist",
];

const faqs = [
  {
    q: "Are sessions confidential?",
    a: "Yes. We follow strict professional confidentiality standards. Your conversations and records remain completely private.",
  },
  {
    q: "Are your therapists licensed?",
    a: "Yes. Every therapist is professionally qualified and experienced in providing evidence-based therapy.",
  },
  {
    q: "Can I choose online or in-person sessions?",
    a: "Absolutely. We offer both online and in-person consultations depending on your comfort and availability.",
  },
  {
    q: "Can I change my therapist later?",
    a: "Yes. If you don't feel comfortable with your therapist, we'll help you find someone better suited to your needs.",
  },
  {
    q: "Do you provide couples therapy?",
    a: "Yes. We offer therapy for individuals, couples and families.",
  },
  {
    q: "How long is each session?",
    a: "Most therapy sessions last between 45 and 60 minutes.",
  },
];

export default function Therapy() {
  return (
    <ServicePage
      serviceKey="therapy"
      serviceTitle="Therapy"
      eyebrow="Therapy"
      heroTitle="A confidential space for"
      heroEmph="mental wellness."
      heroSubtitle="Licensed therapists for individuals, couples and families. Calm, professional, and held with care — on your terms."
      heroImage="https://images.unsplash.com/photo-1714976694867-bc0e012fab70?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400"
      features={features}
      inclusions={inclusions}
      faqs={faqs}
      careForLabel="What brings you here?"
      careForPlaceholder="e.g. work stress, anxiety, couples support"
    />
  );
}
