import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Activity, BookOpen, Boxes, Code2, KeyRound, Network, Server, ShieldCheck, UserCheck } from 'lucide-react'

type Feature = { icon: LucideIcon; title: string; body: string; span?: string }

const features: Feature[] = [
    {
        icon: Network,
        title: 'Visual multi-agent orchestration',
        body: 'Design supervisors, workers and sub-agents on a canvas. Branch with conditions, loop over lists and hand off between agents without writing glue code.',
        span: 'md:col-span-2'
    },
    {
        icon: Boxes,
        title: '300+ building blocks',
        body: 'LLMs, tools, memory, retrievers, document loaders and vector stores, ready to drag in.'
    },
    {
        icon: BookOpen,
        title: 'Knowledge that stays fresh',
        body: 'Document stores ingest files, sites and databases, chunk and embed them, and keep your agents grounded in your data.'
    },
    {
        icon: UserCheck,
        title: 'Human in the loop',
        body: 'Pause for approval before an agent sends, buys or deletes. Resume with feedback.'
    },
    {
        icon: Activity,
        title: 'Executions you can see',
        body: 'Trace every run node by node: inputs, outputs, tool calls, tokens and timing.'
    },
    {
        icon: Code2,
        title: 'API, SDK & embeddable chat',
        body: 'Every flow is an API. Embed a chatbot on any site or share a full-page assistant in one click.',
        span: 'md:col-span-2'
    },
    {
        icon: Server,
        title: 'Runs on your infrastructure',
        body: 'Docker, any cloud or on-prem. Postgres, S3 and Redis queue mode with workers when you need to scale.'
    },
    {
        icon: ShieldCheck,
        title: 'Security built in',
        body: 'Encrypted credentials, API keys, rate limits, domain allow-lists and secret storage in AWS Secrets Manager.'
    },
    {
        icon: KeyRound,
        title: 'Any model, your keys',
        body: 'OpenAI, Anthropic, Google, Azure, Bedrock, Mistral, Groq, Ollama and more. Swap models without rebuilding.'
    }
]

const FeatureGrid = () => (
    <div className='grid gap-5 md:grid-cols-3'>
        {features.map((f, i) => {
            const Icon = f.icon
            return (
                <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                    whileHover={{ y: -4 }}
                    className={`card group relative overflow-hidden p-7 ${f.span ?? ''}`}
                >
                    <div className='absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet/20 opacity-0 blur-3xl transition group-hover:opacity-100' />
                    <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet/30 to-teal/20 ring-1 ring-white/10'>
                        <Icon size={20} className='text-teal' />
                    </div>
                    <h3 className='mt-5 text-lg font-semibold text-white'>{f.title}</h3>
                    <p className='mt-2 text-sm leading-relaxed text-ink-muted'>{f.body}</p>
                </motion.div>
            )
        })}
    </div>
)

export default FeatureGrid
