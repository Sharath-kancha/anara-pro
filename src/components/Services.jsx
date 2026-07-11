import { motion } from "framer-motion";
import { SERVICES } from "../lib/brand";

export default function Services() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:true }}
        >

          <p className="uppercase tracking-[0.25em] text-sage-600 text-sm">
            Our Services
          </p>

          <h2 className="font-serif text-6xl mt-4 leading-tight">

            Care Designed

            <span className="text-sage-600">
              {" "}For Every Family
            </span>

          </h2>

          <p className="mt-6 text-lg text-ink-muted max-w-2xl">
            Professional care that grows with every stage of life.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">

          {SERVICES.map((service,index)=>(

            <motion.div
              key={service.key}
              initial={{opacity:0,y:60}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{
                duration:0.6,
                delay:index*0.12
              }}
              className="group bg-white rounded-[34px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
            >

              <div className="overflow-hidden h-64">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-8">

                <h3 className="font-serif text-4xl mb-4">
                  {service.title}
                </h3>

                <p className="text-ink-muted leading-8">
                  {service.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}