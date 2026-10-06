import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { plans } from '@/config/site'

const PricingCards = () => (
    <div className='grid gap-6 lg:grid-cols-3'>
        {plans.map((p, i) => (
            <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-3xl p-8 ${
                    p.highlighted
                        ? 'border border-transparent bg-navy-700 [background:linear-gradient(#111A2C,#111A2C)_padding-box,linear-gradient(135deg,#7C3AED,#14D8C4)_border-box] shadow-[0_30px_100px_-30px_rgba(124,58,237,0.7)]'
                        : 'card'
                }`}
            >
                {p.highlighted && (
                    <span className='absolute -top-3 left-8 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white'>Most popular</span>
                )}
                <h3 className='text-lg font-semibold text-white'>{p.name}</h3>
                <p className='mt-2 text-sm text-ink-dim'>{p.blurb}</p>
                <p className='mt-6 flex items-baseline gap-1'>
                    <span className='text-5xl font-extrabold tracking-tight text-white'>{p.price}</span>
                    {p.period && <span className='text-ink-dim'>{p.period}</span>}
                </p>
                <a href={p.href} className={`mt-7 ${p.highlighted ? 'btn-primary' : 'btn-ghost'}`}>
                    {p.cta}
                </a>
                <ul className='mt-8 space-y-3 text-sm'>
                    {p.features.map((f) => (
                        <li key={f} className='flex items-start gap-3 text-ink-muted'>
                            <Check size={16} className='mt-0.5 shrink-0 text-teal' /> {f}
                        </li>
                    ))}
                </ul>
            </motion.div>
        ))}
    </div>
)

export default PricingCards
