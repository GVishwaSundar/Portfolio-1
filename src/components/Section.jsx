import { motion } from 'framer-motion'

function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 max-w-2xl lg:mb-10"
      >
        <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-white/50">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  )
}

export default Section
