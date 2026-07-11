import { BRAND } from "../lib/brand";
console.log("Privacy Loaded");

export default function Privacy() {
  return (
    <div className="bg-ivory-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="font-serif text-5xl text-ink mb-4">
          Privacy Policy
        </h1>

        <p className="text-ink-muted mb-10">
          Last Updated: July 2026
        </p>

        <div className="space-y-10 text-ink-muted leading-8">

          <section>
            <h2 className="font-serif text-3xl text-ink mb-3">
              1. Information We Collect
            </h2>

            <p>
              We collect the information you voluntarily provide including your
              name, phone number, email address, city, service preferences and
              enquiry details.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-ink mb-3">
              2. How We Use Your Information
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>Provide care services</li>
              <li>Respond to enquiries</li>
              <li>Verify caregivers</li>
              <li>Improve our services</li>
              <li>Contact you regarding bookings</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-ink mb-3">
              3. Data Protection
            </h2>

            <p>
              Your information is securely stored and never sold to third
              parties. We use industry-standard security practices.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-ink mb-3">
              4. Contact Us
            </h2>

            <p>Email : {BRAND.email}</p>

            <p>Phone : {BRAND.phone}</p>

            <p>Location : Hyderabad, Telangana</p>

          </section>

        </div>

      </div>
    </div>
  );
}