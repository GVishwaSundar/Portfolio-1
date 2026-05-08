import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/content'
import Section from './Section'

function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects">
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.24 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
            className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.052] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent opacity-70" />
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.045] blur-2xl transition duration-500 group-hover:bg-accent/[0.055]" />
            <div className="relative mb-7 flex items-center justify-between">
              <span className="rounded-full border border-white/[0.1] bg-black/30 px-3 py-1 text-xs font-medium text-white/60">
                {project.status}
              </span>
              <div className="flex gap-2 text-white/40">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-black/25 transition group-hover:text-white/70">
                  <FiGithub aria-hidden="true" />
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-black/25 transition group-hover:text-white/70">
                  <FiExternalLink aria-hidden="true" />
                </span>
              </div>
            </div>
            <h3 className="relative text-xl font-semibold leading-snug tracking-[-0.02em] text-white">
              {project.title}
            </h3>
            <p className="relative mt-4 flex-1 text-sm leading-7 text-white/60 sm:text-[0.95rem]">
              {project.description}
            </p>
            <div className="relative mt-7 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/[0.08] bg-black/25 px-3 py-1.5 text-xs font-medium text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

export default Projects
