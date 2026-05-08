import { FiBriefcase, FiBookOpen } from 'react-icons/fi'
import { education, experience } from '../data/content'
import GlassCard from './GlassCard'
import Section from './Section'

function Experience() {
  return (
    <Section id="experience" eyebrow="Path" title="Experience & Education">
      <div className="grid gap-5 lg:grid-cols-[1fr_1.08fr]">
        <GlassCard className="relative overflow-hidden">
          <div className="absolute left-0 top-8 h-24 w-px bg-gradient-to-b from-accent/50 to-transparent" />
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-black/25 text-white/70">
              <FiBriefcase aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">Experience</p>
              <p className="mt-1 text-sm font-medium text-accent/80">{experience.duration}</p>
            </div>
          </div>
          <h3 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-white">
            {experience.role}
          </h3>
          <p className="mt-2 text-white/60">{experience.company}</p>
          <p className="mt-6 text-sm leading-7 text-white/70 sm:text-base">{experience.description}</p>
        </GlassCard>

        <GlassCard delay={0.08}>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-black/25 text-white/70">
              <FiBookOpen aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white">Education</h3>
          </div>
          <div className="relative space-y-6 before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-px before:bg-white/10">
            {education.map((item, index) => (
              <div key={`${item.program}-${item.duration}`} className="relative pl-7">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border border-white/20 bg-ink-950 shadow-[0_0_0_4px_rgba(255,255,255,0.04)]" />
                <p className="text-base font-semibold leading-snug text-white">{item.program}</p>
                <p className="mt-1 text-sm text-white/60">{item.institution}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-accent/75">
                  {item.duration}
                </p>
                {index !== education.length - 1 && <div className="mt-5 h-px bg-white/[0.06]" />}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </Section>
  )
}

export default Experience
