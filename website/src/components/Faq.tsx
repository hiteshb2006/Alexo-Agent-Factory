import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { faqs } from '@/config/site'

const Faq = () => {
    const [open, setOpen] = useState<number | null>(0)
    return (
        <div className='mx-auto max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]'>
            {faqs.map((f, i) => (
                <div key={f.q}>
                    <button
                        className='flex w-full items-center justify-between gap-6 px-6 py-5 text-left'
                        onClick={() => setOpen(open === i ? null : i)}
                        aria-expanded={open === i}
                    >
                        <span className='font-medium text-white'>{f.q}</span>
                        <motion.span animate={{ rotate: open === i ? 45 : 0 }} className='shrink-0 text-teal'>
                            <Plus size={18} />
                        </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                        {open === i && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                                <p className='px-6 pb-6 leading-relaxed text-ink-muted'>{f.a}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}

export default Faq
