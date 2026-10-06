import { motion } from 'framer-motion'
import { ArrowRight, Compass, Lock, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import AgentNetwork from '@/components/AgentNetwork'
import CtaBand from '@/components/CtaBand'
import GlowBackground from '@/components/GlowBackground'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { company, products } from '@/config/site'
import { usePageMeta } from '@/lib/usePageMeta'

const values = [
    { icon: Sparkles, title: 'Useful, not just impressive', body: 'We build AI that finishes real work: answering customers, moving data, making decisions people can review.' },
    { icon: Lock, title: 'Your data, your infrastructure', body: 'Our products run where you run. Self-hosted by design, so sensitive data never has to leave your walls.' },
    { icon: Compass, title: 'Human-centric by default', body: 'Reliable, scalable and accountable. People stay in the loop wherever it matters.' }
]

const Home = () => {
    usePageMeta(`${company.name} — AI products that put agents to work`)
    return (
        <>
            <section className='relative overflow-hidden pb-24 pt-36 sm:pt-44'>
                <GlowBackground />
                <div className='container relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]'>
                    <div>
                        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className='eyebrow'>
                            AI agents · Automation · A smarter tomorrow
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.7 }}
                            className='mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl'
                        >
                            The future works <span className='text-gradient'>with agents.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className='mt-6 max-w-xl text-lg leading-relaxed text-ink-muted'
                        >
                            {company.name} builds AI products that turn ideas into real-world impact. Our first product, AgentFactory, lets your team build,
                            orchestrate, and scale AI agents on your own infrastructure.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className='mt-9 flex flex-wrap gap-3'
                        >
                            <Link to='/agentfactory' className='btn-primary'>
                                Explore AgentFactory <ArrowRight size={16} />
                            </Link>
                            <Link to='/contact' className='btn-ghost'>
                                Talk to us
                            </Link>
                        </motion.div>
                    </div>
                    <div className='relative'>
                        <AgentNetwork className='w-full animate-float' />
                    </div>
                </div>
            </section>

            <section id='products' className='container py-24'>
                <SectionHeading eyebrow='Products' title='One company. A growing family of AI products.' lead='Each product is built to solve one problem extremely well, and to work together as the family grows.' />
                <div className='mt-14 grid gap-6 md:grid-cols-2'>
                    {products.map((p, i) => (
                        <Reveal key={p.slug} delay={i * 0.1}>
                            {p.status === 'available' && p.href ? (
                                <Link
                                    to={p.href}
                                    className='group card relative block h-full overflow-hidden p-8 transition hover:border-violet/50 hover:shadow-[0_30px_80px_-30px_rgba(124,58,237,0.6)]'
                                >
                                    <div className='absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet/25 blur-3xl transition group-hover:bg-teal/25' />
                                    <span className='relative inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal'>
                                        <span className='h-1.5 w-1.5 rounded-full bg-teal' /> Available now
                                    </span>
                                    <img src={p.logoDark} alt={p.name} className='relative mt-7 h-10 w-auto' />
                                    <p className='relative mt-5 leading-relaxed text-ink-muted'>{p.summary}</p>
                                    <span className='relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white'>
                                        See AgentFactory <ArrowRight size={16} className='transition group-hover:translate-x-1' />
                                    </span>
                                </Link>
                            ) : (
                                <div className='card relative flex h-full flex-col overflow-hidden border-dashed p-8'>
                                    <span className='inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-ink-muted'>Coming soon</span>
                                    <h3 className='mt-7 text-2xl font-bold text-white'>{p.name}</h3>
                                    <p className='mt-4 leading-relaxed text-ink-muted'>{p.summary}</p>
                                    <a href={`mailto:${company.email.hello}?subject=Notify me about new AlexoCloudAI products`} className='btn-ghost mt-8 w-fit'>
                                        Notify me
                                    </a>
                                </div>
                            )}
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className='relative py-24'>
                <div className='container'>
                    <SectionHeading eyebrow='What we believe' title={<>Reliable. Scalable. <span className='text-gradient'>Human-centric.</span></>} />
                    <div className='mt-14 grid gap-6 md:grid-cols-3'>
                        {values.map((v, i) => {
                            const Icon = v.icon
                            return (
                                <Reveal key={v.title} delay={i * 0.08}>
                                    <div className='card h-full p-7'>
                                        <Icon className='text-teal' size={24} />
                                        <h3 className='mt-5 text-lg font-semibold text-white'>{v.title}</h3>
                                        <p className='mt-2 text-sm leading-relaxed text-ink-muted'>{v.body}</p>
                                    </div>
                                </Reveal>
                            )
                        })}
                    </div>
                </div>
            </section>

            <CtaBand />
        </>
    )
}

export default Home
