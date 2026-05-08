import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import BlockchainBackground from './components/BlockchainBackground'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import GlassCard from './components/GlassCard'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Section from './components/Section'
import Skills from './components/Skills'
import { profile } from './data/content'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink-950 font-sans text-white">
      <BlockchainBackground />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-black/30 backdrop-blur-2xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="#" className="text-sm font-semibold tracking-[0.2em] text-white">
            GVS
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/60 md:flex">
            {['Projects', 'Experience', 'Skills', 'Certifications', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Section id="contact" eyebrow="Contact" title="Build, verify, and ship">
          <GlassCard className="relative overflow-hidden" hover={false}>
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_80%_20%,rgba(158,231,216,0.08),transparent_48%)] lg:block" />
            <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="max-w-2xl text-lg leading-8 text-white/70">
                  {profile.name} is focused on decentralized applications, secure smart contracts,
                  and full-stack product interfaces.
                </p>
                <a
                  href={profile.links.email}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-black/25 px-4 py-3 text-sm font-semibold text-white/75 transition hover:border-white/[0.16] hover:bg-white/[0.07] hover:text-white"
                >
                  <FiMail aria-hidden="true" />
                  abcdgvs@gmail.com
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl border border-white/[0.08] bg-black/25 p-4 transition hover:border-white/[0.16] hover:bg-white/[0.065]"
                >
                  <div className="flex items-center justify-between text-white">
                    <FiGithub aria-hidden="true" />
                    <FiExternalLink className="text-white/35 transition group-hover:text-white/70" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-sm font-semibold text-white">GitHub</p>
                  <p className="mt-1 text-xs text-white/50">GVishwaSundar</p>
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl border border-white/[0.08] bg-black/25 p-4 transition hover:border-white/[0.16] hover:bg-white/[0.065]"
                >
                  <div className="flex items-center justify-between text-white">
                    <FiLinkedin aria-hidden="true" />
                    <FiExternalLink className="text-white/35 transition group-hover:text-white/70" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-sm font-semibold text-white">LinkedIn</p>
                  <p className="mt-1 text-xs text-white/50">G Vishwa Sundar</p>
                </a>
              </div>
            </div>
          </GlassCard>
        </Section>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-white/[0.08] px-5 py-8"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/50 sm:flex-row">
          <p>© 2026 GVS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={profile.links.email} className="transition hover:text-white">Email</a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
