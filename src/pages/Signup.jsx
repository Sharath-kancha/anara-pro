import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Baby,
  HeartHandshake,
  MessageCircleHeart,
  PersonStanding,
  ArrowLeft,
  ArrowRight,
}

from "lucide-react";


const SERVICE_OPTIONS = [
  {
    key: "babysitting",
    title: "Babysitting",
    description: "Trusted childcare and support for your family.",
    icon: Baby,
  },
  {
    key: "elder-care",
    title: "Elder Care",
    description: "Compassionate support and companionship for loved ones.",
    icon: PersonStanding,
  },
  {
    key: "therapy",
    title: "Therapy",
    description: "Professional support for mental and emotional wellbeing.",
    icon: MessageCircleHeart,
  },
  {
    key: "postpartum",
    title: "Postpartum Support",
    description: "Care and guidance through motherhood and recovery.",
    icon: HeartHandshake,
  },
];

const BABYSITTING_QUESTIONS = [
  {
    key: "comfort",
    question: "How comfortable are you leaving your child with a helper?",
    options: [
      "Very comfortable",
      "Somewhat comfortable",
      "Neutral",
      "Not very comfortable",
    ],
  },
  {
    key: "frequency",
    question: "How often do you need a babysitter?",
    options: [
      "Multiple times a week",
      "Once a week",
      "Once or twice a month",
      "Only for special occasions",
    ],
  },
  {
    key: "priority",
    question: "What matters most when choosing a babysitter?",
    options: [
      "Experience & training",
      "Background checks & references",
      "Cost & availability",
      "Personal recommendation",
    ],
  },
  {
    key: "timing",
    question: "When do you usually need help?",
    options: [
      "Daytime",
      "Evenings & weekends",
      "Overnight",
      "Flexible or on-demand",
    ],
  },
];
const ELDER_CARE_QUESTIONS = [
  {
    key: "support_type",
    question: "What type of support does your loved one need most?",
    options: [
      "Daily personal assistance",
      "Companionship",
      "Mobility support",
      "Medication reminders",
    ],
  },
  {
    key: "frequency",
    question: "How often do you need elder care support?",
    options: [
      "Daily",
      "Multiple times a week",
      "Once or twice a week",
      "Occasionally",
    ],
  },
  {
    key: "priority",
    question: "What matters most when choosing an elder caregiver?",
    options: [
      "Experience & training",
      "Background verification",
      "Compassion & communication",
      "Availability & flexibility",
    ],
  },
  {
    key: "timing",
    question: "When is care usually required?",
    options: [
      "Daytime",
      "Nighttime",
      "24/7 or live-in support",
      "Flexible or on-demand",
    ],
  },
];

const THERAPY_QUESTIONS = [
  {
    key: "therapy_for",
    question: "What kind of support are you looking for?",
    options: [
      "Individual Therapy",
      "Couples Therapy",
      "Family Therapy",
      "General Mental Wellness",
    ],
  },
  {
    key: "support_area",
    question: "What would you primarily like support with?",
    options: [
      "Stress & anxiety",
      "Relationships",
      "Low mood & emotional wellbeing",
      "Life changes or personal growth",
    ],
  },
  {
    key: "session_mode",
    question: "How would you prefer to attend your sessions?",
    options: [
      "Online",
      "In-person",
      "Either is fine",
      "Not sure yet",
    ],
  },
  {
    key: "frequency",
    question: "How often would you prefer therapy sessions?",
    options: [
      "Weekly",
      "Every two weeks",
      "Monthly",
      "I'd like guidance",
    ],
  },
];

const POSTPARTUM_QUESTIONS = [
  {
    key: "support_type",
    question: "What kind of postpartum support are you looking for?",
    options: [
      "Emotional wellbeing",
      "Newborn care guidance",
      "Recovery & self-care",
      "A combination of support",
    ],
  },
  {
    key: "stage",
    question: "Where are you in your postpartum journey?",
    options: [
      "Less than 6 weeks",
      "6 weeks to 3 months",
      "3 to 6 months",
      "More than 6 months",
    ],
  },
  {
    key: "priority",
    question: "What would you most like help with?",
    options: [
      "Emotional support",
      "Sleep & recovery",
      "Feeding & newborn care",
      "Adjusting to motherhood",
    ],
  },
  {
    key: "support_mode",
    question: "How would you prefer to receive support?",
    options: [
      "In-home support",
      "Online consultation",
      "A combination of both",
      "Not sure yet",
    ],
  },
];
const QUESTIONNAIRES = {
  babysitting: BABYSITTING_QUESTIONS,
  "elder-care": ELDER_CARE_QUESTIONS,
  therapy: THERAPY_QUESTIONS,
  postpartum: POSTPARTUM_QUESTIONS,
};

export default function Signup() {
  const [step, setStep] = useState(1);

 const [form, setForm] = useState({
  name: "",
  phone: "",
  email: "",
  service: "",
  answers: {},
});
  const updateForm = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const goToServices = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email) {
      alert("Please enter your name, mobile number and email address.");
      return;
    }

    setStep(2);
  };
const currentQuestions = QUESTIONNAIRES[form.service] || [];
  return (
    <main className="min-h-screen bg-ivory-100 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-sage-600 mb-3">
            Welcome to Anara Lifethread
          </p>

          <h1 className="font-serif text-4xl md:text-5xl text-ink">
            Find the right care for your family.
          </h1>

          <p className="mt-4 text-ink-muted text-base md:text-lg max-w-2xl mx-auto">
            Tell us a little about yourself and the support you're looking for.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-sage-100 shadow-soft p-6 md:p-10">

          {/* STEP INDICATOR */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1.5 flex-1 rounded-full bg-sage-600" />

            <div
              className={`h-1.5 flex-1 rounded-full ${
                step >= 2 ? "bg-sage-600" : "bg-sage-100"
              }`}
            />
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-sage-600">
                  Step 1 of 3
                </span>

                <h2 className="font-serif text-2xl text-ink mt-2">
                  Create your account
                </h2>

                <p className="text-ink-muted mt-2">
                  Enter your basic details to get started.
                </p>
              </div>

              <form onSubmit={goToServices} className="space-y-5">

                <div>
                  <label className="block text-sm text-ink mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => updateForm("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full border border-sage-100 rounded-2xl px-4 py-3 outline-none focus:border-sage-600"
                  />
                </div>

                <div>
                  <label className="block text-sm text-ink mb-2">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                    placeholder="Enter your mobile number"
                    className="w-full border border-sage-100 rounded-2xl px-4 py-3 outline-none focus:border-sage-600"
                  />
                </div>

                <div>
                  <label className="block text-sm text-ink mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateForm("email", e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full border border-sage-100 rounded-2xl px-4 py-3 outline-none focus:border-sage-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-sage-600 hover:bg-sage-700 text-white rounded-full py-3.5 font-medium transition-colors"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>

              <p className="text-center text-sm text-ink-muted mt-6">
                Already have an account?{" "}
                <Link to="/login" className="text-sage-600 font-medium">
                  Log in
                </Link>
              </p>
            </div>
          )}

         {/* STEP 2 */}
{step === 2 && (
  <div>
    <button
      type="button"
      onClick={() => setStep(1)}
      className="inline-flex items-center gap-2 text-sm text-sage-600 mb-6"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>

    <div className="mb-8">
      <span className="text-xs uppercase tracking-widest text-sage-600">
        Step 2 of 3
      </span>

      <h2 className="font-serif text-3xl text-ink mt-2">
        What kind of support are you looking for?
      </h2>

      <p className="text-ink-muted mt-2">
        Select the service you're most interested in.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 gap-4">
      {SERVICE_OPTIONS.map((service) => {
        const Icon = service.icon;
        const selected = form.service === service.key;

        return (
          <button
            key={service.key}
            type="button"
            onClick={() => updateForm("service", service.key)}
            className={`text-left rounded-3xl border p-6 transition-all ${
              selected
                ? "border-sage-600 bg-sage-50 shadow-soft"
                : "border-sage-100 hover:border-sage-300 hover:-translate-y-0.5"
            }`}
          >
            <div className="w-11 h-11 rounded-2xl bg-sage-50 text-sage-600 flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>

            <h3 className="font-serif text-xl text-ink mt-5">
              {service.title}
            </h3>

            <p className="text-sm text-ink-muted mt-2 leading-relaxed">
              {service.description}
            </p>
          </button>
        );
      })}
    </div>

    <button
      type="button"
      disabled={!form.service}
      onClick={() => setStep(3)}
      className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-sage-600 disabled:bg-sage-200 disabled:cursor-not-allowed hover:bg-sage-700 text-white rounded-full py-3.5 font-medium transition-colors"
    >
      Continue
      <ArrowRight className="w-4 h-4" />
    </button>
  </div>
)}

{/* STEP 3 */}
{step === 3 && (
  <div>
    <button
      type="button"
      onClick={() => setStep(2)}
      className="inline-flex items-center gap-2 text-sm text-sage-600 mb-6"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>

    <div className="mb-8">
      <span className="text-xs uppercase tracking-widest text-sage-600">
        Step 3 of 3
      </span>

      <h2 className="font-serif text-3xl text-ink mt-2">
        Tell us about your care needs.
      </h2>

      <p className="text-ink-muted mt-2">
        Your answers help us understand the kind of support you're looking for.
      </p>
    </div>

    <div className="space-y-8">
      {currentQuestions.map((item, index) => (
        <div key={item.key}>
          <h3 className="font-medium text-ink mb-4">
            {index + 1}. {item.question}
          </h3>

          <div className="grid sm:grid-cols-2 gap-3">
            {item.options.map((option) => {
              const selected = form.answers[item.key] === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() =>
                    setForm((current) => ({
                      ...current,
                      answers: {
                        ...current.answers,
                        [item.key]: option,
                      },
                    }))
                  }
                  className={`text-left rounded-2xl border px-4 py-3 text-sm transition-all ${
                    selected
                      ? "border-sage-600 bg-sage-50 text-sage-700"
                      : "border-sage-100 text-ink hover:border-sage-300"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <button
        type="button"
        disabled={
          currentQuestions.length === 0 ||
          Object.keys(form.answers).length < currentQuestions.length
        }
        onClick={() => {
          console.log("Completed signup:", form);
          alert("Thank you! Your details have been recorded.");
        }}
        className="w-full bg-sage-600 disabled:bg-sage-200 disabled:cursor-not-allowed hover:bg-sage-700 text-white rounded-full py-3.5 font-medium transition-colors"
      >
        Complete Sign Up
      </button>
    </div>
  </div>
)}

      
        </div>
      </div>
    </main>
  );
}