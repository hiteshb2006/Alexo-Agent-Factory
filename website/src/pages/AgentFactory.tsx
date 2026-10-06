import { motion } from 'framer-motion'
import { ArrowRight, Download, KeyRound, PlayCircle, Rocket } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CtaBand from '@/components/CtaBand'
import Faq from '@/components/Faq'
import FeatureGrid from '@/components/FeatureGrid'
import GlowBackground from '@/components/GlowBackground'
import IntegrationMarquee from '@/components/IntegrationMarquee'
import PricingCards from '@/components/PricingCards'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import StatsBand from '@/components/StatsBand'
import StoryScroll from '@/components/StoryScroll'
import VideoShowcase from '@/components/VideoShowcase'
import WorkflowDemo from '@/components/WorkflowDemo'
import { links } from '@/config/site'
import { usePageMeta } from '@/lib/usePageMeta'

const useCases = [
    {
        id: 'support',
        label: 'Customer support',
        title: 'Resolve tickets before anyone opens them',
        body: 'Classify incoming tickets, answer from your help center, issue routine refunds with approval, and escalate the hard ones with a ready summary.',
        points: ['Sentiment-aware routing', 'Answers grounded in your docs', 'Human approval for refunds']
    },
    {
        id: 'research',
        label: 'Research',
        title: 'A research team that never sleeps',
        body: 'A supervisor agent breaks a question into sub-tasks, researcher agents search the web and your files in parallel, and a writer agent assembles a cited report.',
        points: ['Multi-agent deep research', 'Web + internal sources', 'Structured, cited output']
    },
    {
        id: 'ops',
        label: 'Operations',
        title: 'Automate the busywork between systems',
        body: 'Trigger on a webhook or a schedule, read emails and sheets, call APIs, update your CRM, and post the result in Slack or Teams.',
        points: ['Webhooks & schedules', 'Gmail, Sheets, Slack, Teams', 'HTTP & custom functions']
    },
    {
        id: 'knowledge',
        label: 'Knowledge',
        title: 'Every document, one conversation away',
        body: 'Ingest PDFs, wikis, Notion, Confluence and databases into document stores, then give every employee an assistant that answers with sources.',
        points: ['39 data loaders', '25 vector stores', 'Embeddable assistant']
    }
]

const steps = [
    { icon: KeyRound, title: 'Create your account', body: 'Pick a plan and get your license key instantly. 14-day free trial, no card required.' },
    { icon: Download, title: 'Install anywhere', body: 'One Docker command on your cloud, data center or laptop. Postgres, S3 and Redis when you scale.' },
    { icon: Rocket, title: 'Build and ship agents', body: 'Start from templates or a blank canvas, connect your models and data, and publish as an API or chatbot.' }
]

const AgentFactory = () => {
    usePageMeta('AgentFactory — Build, orchestrate, and scale AI agents', 'Visual multi-agent orchestration that runs on your own infrastructure.')
    const [tab, setTab] = useState(useCases[0].id)
    const current = useCases.find((u) => u.id === tab) ?? useCases[0]

    return (
        <>
            {/* Hero */}
            <section className='relative overflow-hidden pb-20 pt-36 sm:pt-44'>
                <GlowBackground />
                <div className='container relative'>
                    <div className='mx-auto max-w-4xl text-center'>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            src='/brand/agentfactory_by_alexocloudai_dark.svg'
                            alt='AgentFactory by AlexoCloudAI'
                            className='mx-auto h-14 w-auto sm:h-16'
                        />
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.7 }}
                            className='mt-10 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl'
                        >
                            Turn ideas into <span className='text-gradient'>AI agents</span> that work.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className='mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted'
                        >
                            Build, orchestrate, and scale AI agents on a visual canvas. Connect any model, your tools and your data, then run it on your own
                            infrastructure.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className='mt-9 flex flex-wrap justify-center gap-3'
                        >
                            <a href={links.signup} className='btn-primary'>
                                Start free trial <ArrowRight size={16} />
                            </a>
                            <a href='#story' className='btn-ghost'>
                                <PlayCircle size={16} /> Watch the story
                            </a>
                        </motion.div>
                        <p className='mt-6 text-xs uppercase tracking-[0.3em] text-ink-dim'>Ideas → Agents → Automation → Real impact</p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className='mx-auto mt-16 max-w-4xl'
                    >
                        <WorkflowDemo />
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className='container pb-8'>
                <Reveal>
                    <StatsBand />
                </Reveal>
            </section>

            {/* Video */}
            <section id='story' className='relative scroll-mt-24 py-24'>
                <div className='container'>
                    <SectionHeading eyebrow='The story' title='From a whiteboard idea to agents in production.' lead='Two minutes of reading, thirty seconds of watching.' />
                    <div className='mt-14'>
                        <VideoShowcase />
                    </div>
                </div>
            </section>

            {/* Scroll story */}
            <section className='relative py-24'>
                <div className='container'>
                    <SectionHeading eyebrow='How ideas become impact' title={<>Four steps. <span className='text-gradient'>Zero glue code.</span></>} />
                    <div className='mt-20'>
                        <StoryScroll />
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id='features' className='scroll-mt-24 py-24'>
                <div className='container'>
                    <SectionHeading
                        eyebrow='Features'
                        title='Everything you need to put agents to work.'
                        lead='From the first prototype to thousands of executions a day.'
                    />
                    <div className='mt-14'>
                        <FeatureGrid />
                    </div>
                </div>
            </section>

            {/* Use cases */}
            <section className='py-24'>
                <div className='container'>
                    <SectionHeading eyebrow='Use cases' title='Built for the work your team actually does.' />
                    <div className='mt-12 flex flex-wrap justify-center gap-2'>
                        {useCases.map((u) => (
                            <button
                                key={u.id}
                                onClick={() => setTab(u.id)}
                                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition ${
                                    tab === u.id ? 'text-white' : 'text-ink-muted hover:text-white'
                                }`}
                            >
                                {tab === u.id && (
                                    <motion.span layoutId='uc-pill' className='absolute inset-0 rounded-full bg-gradient-to-r from-violet to-[#4F7BEA]' />
                                )}
                                <span className='relative'>{u.label}</span>
                            </button>
                        ))}
                    </div>
                    <motion.div
                        key={current.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className='card mx-auto mt-10 grid max-w-4xl gap-8 p-8 md:grid-cols-[1.3fr_1fr] md:p-10'
                    >
                        <div>
                            <h3 className='text-2xl font-bold text-white'>{current.title}</h3>
                            <p className='mt-4 leading-relaxed text-ink-muted'>{current.body}</p>
                        </div>
                        <ul className='space-y-3'>
                            {current.points.map((p) => (
                                <li key={p} className='flex items-center gap-3 rounded-xl border border-white/10 bg-navy-700/60 px-4 py-3 text-sm text-white'>
                                    <span className='h-2 w-2 rounded-full bg-teal shadow-[0_0_12px_#14D8C4]' /> {p}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Integrations */}
            <section className='py-24'>
                <div className='container'>
                    <SectionHeading eyebrow='Integrations' title='Bring your models, data and tools.' lead='Swap providers in a click. No lock-in to any single AI vendor.' />
                </div>
                <div className='mt-14'>
                    <IntegrationMarquee />
                </div>
            </section>

            {/* Get started */}
            <section className='py-24'>
                <div className='container'>
                    <SectionHeading eyebrow='Get started' title='Running in minutes, on your terms.' />
                    <div className='mt-14 grid gap-6 md:grid-cols-3'>
                        {steps.map((s, i) => {
                            const Icon = s.icon
                            return (
                                <Reveal key={s.title} delay={i * 0.1}>
                                    <div className='card relative h-full p-8'>
                                        <span className='absolute right-6 top-5 text-6xl font-extrabold text-white/5'>{i + 1}</span>
                                        <Icon className='text-teal' size={26} />
                                        <h3 className='mt-5 text-lg font-semibold text-white'>{s.title}</h3>
                                        <p className='mt-2 text-sm leading-relaxed text-ink-muted'>{s.body}</p>
                                    </div>
                                </Reveal>
                            )
                        })}
                    </div>
                    <Reveal className='mx-auto mt-10 max-w-2xl'>
                        <div className='overflow-hidden rounded-2xl border border-white/10 bg-navy-900 font-mono text-sm'>
                            <div className='flex gap-1.5 border-b border-white/10 px-4 py-3'>
                                <span className='h-3 w-3 rounded-full bg-coral/80' />
                                <span className='h-3 w-3 rounded-full bg-[#FFD166]/80' />
                                <span className='h-3 w-3 rounded-full bg-teal/80' />
                            </div>
                            <pre className='overflow-x-auto p-5 leading-7 text-ink-muted'>
                                <span className='text-ink-dim'># run AgentFactory with your license key</span>
                                {'\n'}
                                <span className='text-teal'>docker run</span> -d -p 3000:3000 \{'\n'}
                                {'  '}-e AGENTFACTORY_LICENSE_KEY=<span className='text-violet-300'>&lt;your-key&gt;</span> \{'\n'}
                                {'  '}alexocloudai/agentfactory
                            </pre>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Pricing */}
            <section id='pricing' className='scroll-mt-24 py-24'>
                <div className='container'>
                    <SectionHeading eyebrow='Pricing' title='Simple plans. Self-hosted. Yours.' lead='Every plan starts with a 14-day free trial.' />
                    <div className='mt-14'>
                        <PricingCards />
                    </div>
                    <p className='mt-8 text-center text-sm text-ink-dim'>
                        Need something different? <Link to='/contact?topic=enterprise' className='text-teal hover:underline'>Talk to sales</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className='py-24'>
                <div className='container'>
                    <SectionHeading eyebrow='FAQ' title='Questions, answered.' />
                    <div className='mt-12'>
                        <Faq />
                    </div>
                </div>
            </section>

            <CtaBand />
        </>
    )
}

export default AgentFactory
