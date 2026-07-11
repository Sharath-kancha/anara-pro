import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-ivory-100 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.3em] text-sage-600 text-sm mb-6">
            Supporting Every Chapter of Life
          </p>

          <h1 className="font-serif text-6xl leading-tight">
            <span className="text-ink">Trusted</span>{" "}
            <span className="text-sage-600">Care</span>
            <br />
            <span className="text-ink">For Every</span>{" "}
            <span className="text-sage-600">Family</span>
          </h1>

          <p className="mt-8 text-lg text-ink-muted leading-8 max-w-xl">
            Babysitting, Elder Care, Therapy and Postpartum Care —
            thoughtfully designed for modern families in Hyderabad.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="bg-sage-600 text-white px-8 py-4 rounded-full">
              Book Consultation
            </button>

            <button className="border border-sage-600 text-sage-600 px-8 py-4 rounded-full">
              Explore Services
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white rounded-[40px] shadow-2xl p-8">
            <img
              src="https://customer-assets.emergentagent.com/job_e273245d-e612-4d60-bf93-edd6592c781d/artifacts/uf99ybxi_image.png"
              alt="Anara"
              className="rounded-3xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}