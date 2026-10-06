import type { ReactNode } from 'react'
import Reveal from './Reveal'

type Props = { eyebrow: string; title: ReactNode; lead?: ReactNode; center?: boolean }

const SectionHeading = ({ eyebrow, title, lead, center = true }: Props) => (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
        <p className='eyebrow'>{eyebrow}</p>
        <h2 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl'>{title}</h2>
        {lead && <p className='mt-5 text-lg leading-relaxed text-ink-muted'>{lead}</p>}
    </Reveal>
)

export default SectionHeading
