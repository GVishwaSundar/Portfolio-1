import { FiAward } from 'react-icons/fi'
import { certifications } from '../data/content'
import GlassCard from './GlassCard'
import Section from './Section'

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications">
      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((certification, index) => (
          <GlassCard key={certification} delay={index * 0.08} className="p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-black/25 text-white/70">
                <FiAward aria-hidden="true" />
              </div>
              <h3 className="pt-2 text-lg font-semibold leading-snug tracking-[-0.015em] text-white">
                {certification}
              </h3>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}

export default Certifications
