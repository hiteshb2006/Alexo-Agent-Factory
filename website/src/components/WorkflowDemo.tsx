import { AnimatePresence, motion } from 'framer-motion'
import { BrainCircuit, CheckCircle2, Database, GitBranch, Play, RotateCcw, Zap } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const steps = [
    { icon: Zap, title: 'Trigger', sub: 'New ticket', log: 'Ticket #4821 received: "I was charged twice this month."' },
    { icon: BrainCircuit, title: 'Classify', sub: 'with AI', log: 'Intent: billing · Sentiment: frustrated · Priority: high' },
    { icon: GitBranch, title: 'Take Action', sub: 'Reply / Escalate', log: 'Refund policy matched → drafted reply + escalated to billing team' },
    { icon: Database, title: 'Update', sub: 'CRM', log: 'CRM record updated · customer notified · SLA met in 4.2s' }
]

/** A clickable mini version of the AgentFactory canvas that "runs" a support agent. */
const WorkflowDemo = () => {
    const [active, setActive] = useState(-1)
    const [running, setRunning] = useState(false)
    const timers = useRef<number[]>([])

    const clear = () => {
        timers.current.forEach((t) => window.clearTimeout(t))
        timers.current = []
    }

    const run = () => {
        clear()
        setRunning(true)
        setActive(-1)
        steps.forEach((_, i) => {
            timers.current.push(window.setTimeout(() => setActive(i), 400 + i * 1100))
        })
        timers.current.push(window.setTimeout(() => setRunning(false), 400 + steps.length * 1100))
    }

    useEffect(() => {
        const t = window.setTimeout(run, 900)
        return () => {
            window.clearTimeout(t)
            clear()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const done = !running && active === steps.length - 1

    return (
        <div className='card relative overflow-hidden p-5 shadow-[0_40px_120px_-40px_rgba(124,58,237,0.6)] sm:p-7'>
            <div className='flex flex-wrap items-center justify-between gap-3'>
                <div className='flex items-center gap-3'>
                    <img src='/brand/agentfactory_mark.svg' alt='' className='h-7 w-auto' />
                    <div>
                        <p className='text-sm font-semibold text-white'>Customer Support Agent</p>
                        <p className='text-xs text-ink-dim'>Automate support, analyze sentiment, escalate when needed.</p>
                    </div>
                    <span className='ml-1 inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-2.5 py-1 text-[11px] font-semibold text-teal'>
                        <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-teal' /> Active
                    </span>
                </div>
                <button onClick={run} disabled={running} className='btn-primary !py-2 !text-xs disabled:opacity-60'>
                    {done ? <RotateCcw size={14} /> : <Play size={14} />} {running ? 'Running…' : done ? 'Run again' : 'Run'}
                </button>
            </div>

            <div className='mt-7 grid grid-cols-2 gap-4 sm:flex sm:items-center sm:justify-between'>
                {steps.map((s, i) => {
                    const Icon = s.icon
                    const lit = i <= active
                    return (
                        <div key={s.title} className='flex items-center sm:flex-1'>
                            <motion.div
                                animate={{
                                    borderColor: lit ? 'rgba(20,216,196,0.9)' : 'rgba(255,255,255,0.12)',
                                    boxShadow: i === active && running ? '0 0 32px rgba(20,216,196,0.45)' : '0 0 0 rgba(0,0,0,0)'
                                }}
                                className='relative w-full rounded-xl border bg-navy-700/80 px-3 py-4 text-center'
                            >
                                <Icon className={`mx-auto transition-colors ${lit ? 'text-teal' : 'text-ink-dim'}`} size={26} />
                                <p className='mt-2 text-xs font-semibold text-white'>{s.title}</p>
                                <p className='text-[11px] text-ink-dim'>{s.sub}</p>
                                {lit && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className='absolute -right-2 -top-2 rounded-full bg-navy text-teal'
                                    >
                                        <CheckCircle2 size={18} />
                                    </motion.span>
                                )}
                            </motion.div>
                            {i < steps.length - 1 && (
                                <div className='relative mx-2 hidden h-0.5 w-10 shrink-0 overflow-hidden rounded bg-white/10 sm:block'>
                                    <motion.div
                                        className='absolute inset-y-0 left-0 bg-gradient-to-r from-teal to-violet'
                                        animate={{ width: i < active ? '100%' : '0%' }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            <div className='mt-6 min-h-32 overflow-hidden rounded-xl sm:h-32 border border-white/10 bg-navy-900/80 p-4 font-mono text-xs leading-6'>
                <AnimatePresence initial={false}>
                    {steps.slice(0, active + 1).map((s, i) => (
                        <motion.p key={s.title} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className='text-ink-muted'>
                            <span className='text-violet-300'>[{String(i + 1).padStart(2, '0')}]</span> {s.log}
                        </motion.p>
                    ))}
                </AnimatePresence>
                {active < 0 && <p className='text-ink-dim'>Waiting for a trigger…</p>}
            </div>
        </div>
    )
}

export default WorkflowDemo
