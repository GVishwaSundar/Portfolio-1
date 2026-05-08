import { motion } from 'framer-motion'
import { FiArrowDownRight, FiCode, FiCpu, FiExternalLink, FiFileText, FiGithub, FiLinkedin } from 'react-icons/fi'
import { profile } from '../data/content'

function Hero() {
  const buttonBase =
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition duration-300'

  return (
    <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-5 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <motion.div
        className="absolute left-1/2 top-32 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        animate={{ opacity: [0.22, 0.34, 0.22], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3.5 py-2 text-sm text-white/70 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_14px_rgba(158,231,216,0.7)]" />
            {profile.availability}
          </div>
          <p className="mb-5 text-sm font-medium text-white/52">{profile.roles.join(' / ')}</p>
          <h1 className="max-w-4xl text-[3.45rem] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.4rem]">
            {profile.name}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            {profile.intro}
          </p>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <a
              href="#projects"
              className={`${buttonBase} col-span-2 bg-white text-black shadow-[0_12px_34px_rgba(255,255,255,0.08)] hover:bg-white/90 sm:col-span-1`}
            >
              View Projects
              <FiArrowDownRight aria-hidden="true" />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className={`${buttonBase} border border-white/10 bg-white/[0.045] text-white hover:border-white/20 hover:bg-white/[0.08]`}
            >
              <FiGithub aria-hidden="true" />
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`${buttonBase} border border-white/10 bg-white/[0.045] text-white hover:border-white/20 hover:bg-white/[0.08]`}
            >
              <FiLinkedin aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.links.resume}
              className={`${buttonBase} border border-white/10 bg-white/[0.045] text-white hover:border-white/20 hover:bg-white/[0.08]`}
            >
              <FiFileText aria-hidden="true" />
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="relative"
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-white/[0.035] blur-2xl" />
          <div className="relative rounded-2xl border border-white/[0.09] bg-white/[0.055] p-4 shadow-glass backdrop-blur-2xl sm:p-5">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-white/25" />
                <span className="h-3 w-3 rounded-full bg-white/15" />
                <span className="h-3 w-3 rounded-full bg-accent/80" />
              </div>
              <span className="text-xs text-white/40">portfolio.core</span>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-black/30 p-4">
                <FiCpu className="shrink-0 text-white/70" aria-hidden="true" />
                <span className="text-white/70">smart-contract workflows</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-black/30 p-4">
                <FiCode className="shrink-0 text-white/70" aria-hidden="true" />
                <span className="text-white/70">full-stack interfaces</span>
              </div>
              <pre className="overflow-hidden rounded-lg border border-white/[0.08] bg-black/45 p-4 text-xs leading-6 text-white/60">
                <code>{`const focus = [
  'DApp Architecture',
  'Secure Validation',
  'Modern UI Systems'
]`}</code>
              </pre>
              <a
                href={profile.links.email}
                className="inline-flex w-full items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white/70 transition hover:bg-white/[0.07] hover:text-white"
              >
                abcdgvs@gmail.com
                <FiExternalLink aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
