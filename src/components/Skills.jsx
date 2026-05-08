import { FiBox, FiCode, FiCpu, FiDatabase } from 'react-icons/fi'
import { skills } from '../data/content'
import GlassCard from './GlassCard'
import Section from './Section'

const icons = {
  Web3: FiCpu,
  Frontend: FiCode,
  'Backend & Database': FiDatabase,
  'Tools & OS': FiBox,
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Stack" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, index) => (
          <GlassCard key={group.group} delay={index * 0.06} className="p-5">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-base font-semibold text-white">{group.group}</h3>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-black/25 text-white/60">
                {(() => {
                  const Icon = icons[group.group]
                  return <Icon aria-hidden="true" />
                })()}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/[0.08] bg-black/25 px-3 py-1.5 text-xs font-medium text-white/70 transition hover:border-white/20 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}

export default Skills
