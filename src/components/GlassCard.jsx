import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

function GlassCard({ children, className = '', delay = 0, hover = true }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay }}
      className={`rounded-xl border border-white/[0.09] bg-white/[0.055] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition-colors duration-300 hover:border-white/[0.16] hover:bg-white/[0.075] ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard
