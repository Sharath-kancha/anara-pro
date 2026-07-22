import { useState } from "react";
import { Link } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


import {
  Baby,
  HeartHandshake,
  MessageCircleHeart,
  PersonStanding,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";


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
  {
  key: "serviceLevel",
  question:
    "Which of the following best describes the level of service you consider essential for your family?",
  options: [
    "Comprehensive, all-day care with certified professionals",
    "Dedicated part-time assistance for specific routines",
    "Flexible care for occasional support",
    "Basic supervision focusing on safety",
  ],
},
{
  key: "dailyRoutineHelp",
  question:
    "Which type of help would you prefer for your child's daily routine?",
  options: [
    "Basic safety only, doing the rest myself",
    "Some help with everyday routines to keep things smooth",
    "Total help with activities, learning, and development",
    "Flexible, as-needed support only (on-demand help for emergencies, busy days, or irregular schedules rather than a fixed daily routine)",
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
  {
  key: "caregiver_quality",
  question:
    "When evaluating a caregiver's quality and reliability, what is the sign that matters most to you?",
  options: [
    "Their formal training and certification",
    "The clarity of the company's safety procedures",
    "Their direct experience in similar roles",
    "Their compassionate approach to care",
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
  {
  key: "therapy_setting",
  question:
    "What type of therapy setting would you be most comfortable with?",
  options: [
    "In-home sessions",
    "Teletherapy sessions",
    "Outpatient clinic visits",
    "Group therapy sessions",
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
  {
  key: "specialist_expertise",
  question:
    "Is there a specific type of expertise you are looking for in a postpartum support specialist?",
  options: [
    "Experience with newborn care and sleep routines",
    "Background in mental health and trauma-informed care",
    "Lactation consultation certification",
    "Postpartum fitness and rehabilitation knowledge",
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
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [otp, setOtp] = useState("");
const [otpSent, setOtpSent] = useState(false);
const [otpVerified, setOtpVerified] = useState(false);
const [confirmationResult, setConfirmationResult] = useState(null);
const [otpLoading, setOtpLoading] = useState(false);
const [otpError, setOtpError] = useState("");

const [form, setForm] = useState({
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  pincode: "",
  service: "",
  numberOfChildren: "",
  childrenAges: [],
  answers: {},
});
  const updateForm = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };
const handleSendOtp = async () => {
  try {
    setOtpLoading(true);
    setOtpError("");

    if (!form.phone) {
      setOtpError("Please enter your mobile number.");
      return;
    }

    const phoneNumber = form.phone.startsWith("+")
      ? form.phone
      : `+91${form.phone}`;

    // Clear old reCAPTCHA verifier before creating a new one
   if (window.recaptchaVerifier) {
  window.recaptchaVerifier = null;
}

    // Create a fresh reCAPTCHA verifier
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );

    window.recaptchaVerifier = recaptchaVerifier;

    const result = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      recaptchaVerifier
    );

    setConfirmationResult(result);
    setOtpSent(true);
  } catch (error) {
    console.error("OTP Error:", error);

    // Remove failed verifier so next attempt creates a fresh one
    if (window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier.clear();
      } catch (clearError) {
        console.log("reCAPTCHA cleanup error:", clearError);
      }

      window.recaptchaVerifier = null;
    }

    setOtpError(
      "Could not send OTP. Please check the mobile number and try again."
    );
  } finally {
    setOtpLoading(false);
  }
};
const handleVerifyOtp = async () => {
  try {
    setOtpLoading(true);
    setOtpError("");

    if (!confirmationResult) {
      setOtpError("Please request an OTP first.");
      return;
    }

    if (otp.length !== 6) {
      setOtpError("Please enter the 6-digit OTP.");
      return;
    }

    await confirmationResult.confirm(otp);

    setOtpVerified(true);
    setOtpError("");
  } catch (error) {
    console.error("OTP Verification Error:", error);
    setOtpError("Invalid OTP. Please check the code and try again.");
  } finally {
    setOtpLoading(false);
  }
};
const handleCompleteSignup = async () => {
  try {
    if (!otpVerified) {
      alert("Please verify your mobile number first.");
      return;
    }
if (!auth.currentUser) {
  alert("Your session has expired. Please verify your mobile number again.");
  return;
}
    const signupData = {
     uid: auth.currentUser?.uid,
userId: auth.currentUser?.uid, 
      name: form.name,
      phone: form.phone,
      email: form.email,
      address: form.address,
      city: form.city,
      pincode: form.pincode,
      service: form.service,
      answers: form.answers,
      phoneVerified: true,
      createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, "signups"), signupData);

   console.log("Signup saved successfully");
setSignupSuccess(true);
  } catch (error) {
    console.error("Error saving signup:", error);
    alert("Something went wrong while saving your details. Please try again.");
  }
};
const goToServices = (e) => {
  e.preventDefault();

  if (!form.name || !form.phone || !form.email) {
    alert("Please enter your name, mobile number and email address.");
    return;
  }

  if (!otpVerified) {
    alert("Please verify your mobile number with OTP before continuing.");
    return;
  }

  if (!form.address || !form.city || !form.pincode) {
    alert("Please enter your complete address, city and PIN code.");
    return;
  }

  if (form.pincode.length !== 6) {
    alert("Please enter a valid 6-digit PIN code.");
    return;
  }

  setStep(2);
};
const currentQuestions = QUESTIONNAIRES[form.service] || [];
if (signupSuccess) {
  return (
    <main className="min-h-screen bg-ivory-100 flex items-center justify-center px-6 py-24">
      <div className="max-w-xl w-full bg-white border border-sage-100 rounded-3xl p-8 sm:p-12 text-center shadow-soft">

        <div className="w-16 h-16 mx-auto rounded-full bg-sage-50 flex items-center justify-center mb-6">
          <span className="text-sage-600 text-3xl">✓</span>
        </div>

        <span className="text-xs uppercase tracking-widest text-sage-600">
          Registration Complete
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl text-ink mt-3">
          You're all set, {form.name}!
        </h1>

        <p className="font-serif text-xl text-ink mt-4">
          Welcome to Anara Lifethread
        </p>

        <p className="text-ink-muted mt-4 leading-relaxed">
          Thank you for sharing your care requirements with us. Our team will
          review your details and connect with you shortly to help you find the
          right care support for your family.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center bg-sage-600 hover:bg-sage-700 text-white rounded-full px-8 py-3.5 font-medium transition-colors"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}  
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

  <div className="flex gap-3">
    <input
      type="tel"
      value={form.phone}
      onChange={(e) => {
        updateForm("phone", e.target.value);
        setOtpVerified(false);
        setOtpSent(false);
      }}
      placeholder="Enter your mobile number"
      disabled={otpVerified}
      className="flex-1 border border-sage-100 rounded-2xl px-4 py-3 outline-none focus:border-sage-600 disabled:bg-sage-50"
    />

    {!otpVerified && (
      <button
        type="button"
        onClick={handleSendOtp}
        disabled={otpLoading || !form.phone}
        className="px-5 py-3 rounded-2xl bg-sage-600 text-white font-medium disabled:bg-sage-200 disabled:cursor-not-allowed"
      >
        {otpLoading ? "Sending..." : otpSent ? "Resend OTP" : "Send OTP"}
      </button>
    )}

    {otpVerified && (
      <div className="flex items-center px-4 text-sage-600 font-medium">
        ✓ Verified
      </div>
    )}
  </div>

  {otpError && (
    <p className="text-sm text-red-500 mt-2">
      {otpError}
    </p>
  )}
</div>

<div
  id="recaptcha-container"
  key={otpSent ? "otp-sent" : "otp-not-sent"}
></div>

{otpSent && !otpVerified && (
  <div>
    <label className="block text-sm text-ink mb-2">
      Enter OTP
    </label>

    <div className="flex gap-3">
      <input
        type="text"
        inputMode="numeric"
        maxLength="6"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter 6-digit OTP"
        className="flex-1 border border-sage-100 rounded-2xl px-4 py-3 outline-none focus:border-sage-600"
      />

      <button
        type="button"
        onClick={handleVerifyOtp}
        disabled={otpLoading || otp.length !== 6}
        className="px-5 py-3 rounded-2xl bg-sage-600 text-white font-medium disabled:bg-sage-200 disabled:cursor-not-allowed"
      >
        {otpLoading ? "Verifying..." : "Verify OTP"}
      </button>
    </div>
  </div>
)}

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
                <div>
  <label className="block text-sm text-ink mb-2">
    Address
  </label>

  <textarea
    value={form.address}
    onChange={(e) => updateForm("address", e.target.value)}
    placeholder="Enter your complete address"
    rows="3"
    className="w-full border border-sage-100 rounded-2xl px-4 py-3 outline-none focus:border-sage-600 resize-none"
  />
</div>

<div className="grid sm:grid-cols-2 gap-4">
  <div>
    <label className="block text-sm text-ink mb-2">
      City
    </label>

    <input
      type="text"
      value={form.city}
      onChange={(e) => updateForm("city", e.target.value)}
      placeholder="Enter your city"
      className="w-full border border-sage-100 rounded-2xl px-4 py-3 outline-none focus:border-sage-600"
    />
  </div>

  <div>
    <label className="block text-sm text-ink mb-2">
      PIN Code
    </label>

    <input
      type="text"
      value={form.pincode}
      onChange={(e) => updateForm("pincode", e.target.value)}
      placeholder="Enter PIN code"
      maxLength="6"
      className="w-full border border-sage-100 rounded-2xl px-4 py-3 outline-none focus:border-sage-600"
    />
  </div>
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

  {/* CHILDREN DETAILS - ONLY FOR BABYSITTING */}
  {form.service === "babysitting" && (
    <>
      <div>
        <h3 className="font-medium text-ink mb-4">
          How many children do you have?
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((number) => (
            <button
              key={number}
              type="button"
              onClick={() =>
                setForm((current) => ({
                  ...current,
                  numberOfChildren: number,
                  childrenAges: Array(number).fill(""),
                }))
              }
              className={`rounded-2xl border px-4 py-3 text-sm transition-all ${
                form.numberOfChildren === number
                  ? "border-sage-600 bg-sage-50 text-sage-700"
                  : "border-sage-100 text-ink hover:border-sage-300"
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>

      {/* CHILD AGE FIELDS */}
      {form.numberOfChildren && (
        <div>
          <h3 className="font-medium text-ink mb-4">
            {form.numberOfChildren === 1
              ? "What is your child's age?"
              : "What is the age of each child?"}
          </h3>

          <div className="grid sm:grid-cols-2 gap-3">
            {form.childrenAges.map((age, index) => (
              <input
                key={index}
                type="number"
                min="0"
                max="18"
                value={age}
                placeholder={`Child ${index + 1} age`}
                onChange={(e) => {
                  const newAges = [...form.childrenAges];
                  newAges[index] = e.target.value;

                  setForm((current) => ({
                    ...current,
                    childrenAges: newAges,
                  }));
                }}
                className="w-full border border-sage-100 rounded-2xl px-4 py-3 outline-none focus:border-sage-600"
              />
            ))}
          </div>
        </div>
      )}
    </>
  )}

  {/* SERVICE QUESTIONNAIRE */}
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

  {/* COMPLETE SIGN UP */}
  <button
    type="button"
    disabled={
      currentQuestions.length === 0 ||
      Object.keys(form.answers).length < currentQuestions.length
    }
 onClick={handleCompleteSignup}
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