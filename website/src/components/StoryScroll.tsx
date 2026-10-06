import { motion, useScroll, useTransform } from 'framer-motion'
import { Bot, Lightbulb, Rocket, Workflow } from 'lucide-react'
import { useRef } from 'react'

const chapters = [
    {
        icon: Lightbulb,
        kicker: '01 · Ideas',
        title: 'It starts with an idea.',
        body: 'Answer every customer in seconds. Research a market overnight. Turn a backlog of documents into answers. Every team has ideas for AI, and most of them never leave the whiteboard.'
    },
    {
        icon: Bot,
        kicker: '02 · Agents',
        title: 'Shape it into agents.',
        body: 'Drag an LLM, give it tools, memory and your company knowledge. Connect agents to each other: a supervisor that delegates, a researcher that searches, a writer that drafts.'
    },
    {
        icon: Workflow,
        kicker: '03 · Automation',
        title: 'Orchestrate the whole workflow.',
        body: 'Add conditions, loops, human approvals and API calls. Trigger from a webhook, a schedule or a chat. Watch every execution step by step and fix what needs fixing.'
    },
    {
        icon: Rocket,
        kicker: '04 · Real impact',
        title: 'Ship it. Scale it. Own it.',
        body: 'Publish as an API, embed a chatbot on your site, or let your team use it in-app. It runs on your infrastructure, scales with workers and queues, and your data never leaves your control.'
    }
]

/** Sticky, scroll-driven storytelling: Ideas → Agents → Automation → Real impact. */
const StoryScroll = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] })
    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    return (
        <div ref={ref} className='relative mx-auto max-w-4xl'>
            <div className='absolute bottom-0 left-6 top-0 w-px bg-white/10 sm:left-1/2'>
                <motion.div style={{ height: lineHeight }} className='w-px bg-gradient-to-b from-violet via-[#4F7BEA] to-teal' />
            </div>
            <div className='space-y-20 sm:space-y-28'>
                {chapters.map((c, i) => {
                    const Icon = c.icon
                    const right = i % 2 === 1
                    return (
                        <motion.div
                            key={c.kicker}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-120px' }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className={`relative pl-16 sm:w-1/2 sm:pl-0 ${right ? 'sm:ml-auto sm:pl-14' : 'sm:pr-14 sm:text-right'}`}
                        >
                            <div
                                className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-navy-700 shadow-[0_0_40px_rgba(124,58,237,0.35)] sm:top-1 ${
                                    right ? 'sm:-left-6' : 'sm:left-auto sm:-right-6'
                                }`}
                            >
                                <Icon size={22} className='text-teal' />
                            </div>
                            <p className='eyebrow'>{c.kicker}</p>
                            <h3 className='mt-3 text-2xl font-bold text-white sm:text-3xl'>{c.title}</h3>
                            <p className='mt-4 leading-relaxed text-ink-muted'>{c.body}</p>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default StoryScroll
