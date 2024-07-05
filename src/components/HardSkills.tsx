import { SectionTitle } from './SectionTitle'
import { frontendTechnoligies } from '../data/frontendTechnologies'
import { backendTechnoligies } from '../data/backendTecnologies'
import { Technologies } from './Technologies'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function HardSkills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="max-w-[1600] w-[85%] m-auto mt-36 pt-40">
      <SectionTitle title="Habilidades" subtitle="Tecnologias & Ferramentas" />

      <div
        ref={ref}
        className={`flex items-start justify-between mt-14 mb-4 transform ${isInView ? 'animate-translateRightComponent' : ''}`}
      >
        <div className="w-[100%]">
          <span className="font-bold text-2xl text-orange-500">Back-end</span>

          <div className="mt-8">
            {backendTechnoligies.map((tech) => (
              <Technologies key={tech.nome} tech={tech.nome} />
            ))}
          </div>
        </div>

        <div className="w-[100%]">
          <span className="font-bold text-2xl text-orange-500">Front-end</span>

          <div className="mt-8">
            {frontendTechnoligies.map((tech) => (
              <Technologies key={tech.nome} tech={tech.nome} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
