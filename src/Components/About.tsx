import { motion } from "framer-motion";

const features = [
  {
    title: "Durability",
    content:
      "Our plywood is crafted to be highly durable and long-lasting, with robust construction that withstands the test of time.",
  },
  {
    title: "Anti-Borer & Anti-Termite",
    content:
      "We ensure that our plywoods are treated with anti-borer and anti-termite properties to provide added protection and longevity.",
  },
  {
    title: "Environmentally Friendly",
    content:
      "Krivam Ply products are designed with sustainability in mind, using eco-friendly materials and processes.",
  },
  {
    title: "ISO Certified Quality",
    content:
      "Our plywood is produced to meet the highest quality standards, being ISO 9001:2008 certified for exceptional quality.",
  },
  {
    title: "Versatile Applications",
    content:
      "Krivam Ply is suitable for a wide range of applications, from construction to furniture manufacturing.",
  },
  {
    title: "Timely Delivery",
    content:
      "With our extensive distribution network, we guarantee on-time delivery, ensuring our customers get what they need when they need it.",
  },
];

export default function About() {
  return (
    <div className="relative bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
            About Krivam Ply
          </h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            Krivam Ply, an ISO 9001:2008, ISI 710 & 303 certified company, is a
            renowned leader in the plywood industry, headquartered in Chennai.
            With a strong presence across South India, Krivam Ply is a trusted
            and preferred brand among architects, construction companies, and
            industry professionals. Our extensive and efficient distribution
            network ensures timely procurement and delivery of our products.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            At Krivam Ply, we firmly believe that "Well done is better than well
            said." This philosophy drives us to focus on meticulous attention to
            detail and customer satisfaction. Each product is manufactured with
            the highest level of care and precision, ensuring superior quality
            and durability.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center text-center bg-gradient-to-bl from-[#374e37] to-[#162916]  dark:from-amber-700 dark:to-amber-900 p-6 rounded-lg shadow-md"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xl font-semibold font-bebas text-white title"
              >
                {feature.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-4 text-amber-200 content dark:text-gray-300"
              >
                {feature.content}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
