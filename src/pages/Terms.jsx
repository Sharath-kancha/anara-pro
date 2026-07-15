import { BRAND } from "../lib/brand";

export default function Terms() {
  return (
    <div data-testid="page-terms">
      <section className="relative overflow-hidden">
        <div className="sage-gradient absolute inset-0 -z-10" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12 sm:pt-24 sm:pb-16">
          <div className="text-[11px] uppercase tracking-[0.22em] text-sage-600 mb-6">Legal</div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-[64px] leading-[1] tracking-tight text-ink">Terms & Conditions</h1>
          <p className="mt-6 text-ink-muted">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>
      <section className="pb-24">
        <article className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8 text-[16px] leading-[1.85] text-ink-muted">
          <Section title="1. About these terms">
            These terms govern your use of Anara Lifethread's website and services. By engaging with us — through enquiries, consultations or care services — you agree to these terms.
          </Section>
          <Section title="2. Our role">
            Anara connects families with verified caregivers, therapists and specialists. We act as a coordinator and quality steward. Specific care services are delivered by professionals matched to your needs, supervised by our team.
          </Section>
          <Section title="3. Verification">
            We screen every professional through identity, address, reference and background checks. While we use our best judgement and processes, families are encouraged to share concerns immediately so we can act swiftly.
          </Section>
          <Section title="4. Bookings, scheduling & cancellations">
            Bookings are made through our coordination team. Specific scheduling and cancellation terms are shared along with your care plan.
          </Section>
          <Section title="5. Fees & payments">
            Care fees are communicated transparently before service begins. Payment terms are defined in your individual care plan.
          </Section>
          <Section title="6. Conduct & safety">
            Anara expects mutual respect between families and caregivers. We reserve the right to discontinue any engagement that compromises the safety, dignity or wellbeing of either party.
          </Section>
          <Section title="7. Therapy services">
            Therapy services are delivered by licensed clinicians. They are intended for general mental wellness and are not a substitute for emergency or inpatient psychiatric care.
          </Section>
          <Section title="8. Limitation of liability">
            While we work with utmost care, Anara's liability is limited to the fees paid for the relevant service period. We are not liable for indirect, incidental or consequential damages.
          </Section>
          <Section title="9. Intellectual property">
            All content on this website — text, branding, logos and imagery — is the property of Anara Lifethread and may not be used without written permission.
          </Section>
          <Section title="10. Governing law">
            These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.
          </Section>
          <Section title="11. Contact">
            Questions about these terms? Write to <a href={BRAND.emailHref} className="text-sage-600 underline">{BRAND.email}</a> or call {BRAND.phone}.
          </Section>
        </article>
      </section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-serif text-2xl sm:text-3xl text-ink mb-3">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
