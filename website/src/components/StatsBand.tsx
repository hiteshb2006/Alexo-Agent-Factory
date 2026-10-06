import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const stats = [
    { value: 300, suffix: '+', label: 'Nodes & integrations' },
    { value: 29, suffix: '', label: 'Chat model providers' },
    { value: 25, suffix: '', label: 'Vector stores' },
    { value: 39, suffix: '', label: 'Data loaders' }
]

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true })
    const [n, setN] = useState(0)
    useEffect(() => {
        if (!inView) return
        const c = animate(0, to, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
        return () => c.stop()
    }, [inView, to])
    return (
        <span ref={ref}>
            {n}
            {suffix}
        </span>
    )
}

const StatsBand = () => (
    <div className='grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4'>
        {stats.map((s) => (
            <div key={s.label} className='bg-navy-700 px-6 py-8 text-center'>
                <p className='text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl'>
                    <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className='mt-2 text-sm text-ink-dim'>{s.label}</p>
            </div>
        ))}
    </div>
)

export default StatsBand
