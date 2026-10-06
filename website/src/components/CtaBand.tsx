import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { links } from '@/config/site'
import AgentNetwork from './AgentNetwork'
import Reveal from './Reveal'

const CtaBand = () => (
    <section className='container py-24'>
        <Reveal>
            <div className='relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2a1f5c] via-navy-600 to-navy px-8 py-16 sm:px-14'>
                <AgentNetwork className='pointer-events-none absolute -right-24 -top-10 hidden w-[560px] opacity-70 lg:block' />
                <div className='relative max-w-xl'>
                    <h2 className='text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl'>
                        Turn ideas into <span className='text-gradient'>AI agents</span> that work.
                    </h2>
                    <p className='mt-5 text-lg text-ink-muted'>Start a 14-day free trial. Install in minutes, keep your data on your own servers.</p>
                    <div className='mt-8 flex flex-wrap gap-3'>
                        <a href={links.signup} className='btn-primary'>
                            Build what&apos;s next <ArrowRight size={16} />
                        </a>
                        <Link to={links.bookDemo} className='btn-ghost'>
                            Book a demo
                        </Link>
                    </div>
                </div>
            </div>
        </Reveal>
    </section>
)

export default CtaBand
