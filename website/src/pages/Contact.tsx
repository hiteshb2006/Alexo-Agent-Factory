import { Mail, MessageSquare, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import GlowBackground from '@/components/GlowBackground'
import Reveal from '@/components/Reveal'
import { company } from '@/config/site'
import { usePageMeta } from '@/lib/usePageMeta'

const topics: Record<string, string> = {
    sales: 'Sales question',
    demo: 'Book a demo',
    enterprise: 'Enterprise plan',
    support: 'Support',
    partnership: 'Partnership'
}

/** Contact form that opens the visitor's email client pre-filled; no backend required. */
const Contact = () => {
    usePageMeta(`Contact — ${company.name}`)
    const [params] = useSearchParams()
    const initialTopic = params.get('topic') ?? 'sales'
    const [form, setForm] = useState({ name: '', email: '', company: '', topic: topics[initialTopic] ? initialTopic : 'sales', message: '' })

    const submit = (e: FormEvent) => {
        e.preventDefault()
        const to = form.topic === 'support' ? company.email.support : company.email.sales
        const subject = `${topics[form.topic]} — ${form.company || form.name}`
        const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
        window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    const field =
        'mt-2 w-full rounded-xl border border-white/10 bg-navy-700/70 px-4 py-3 text-white placeholder:text-ink-dim focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/40'

    return (
        <section className='relative overflow-hidden pb-24 pt-36 sm:pt-44'>
            <GlowBackground variant='soft' />
            <div className='container relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]'>
                <Reveal>
                    <p className='eyebrow'>Contact</p>
                    <h1 className='mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl'>
                        Let&apos;s build <span className='text-gradient'>what&apos;s next.</span>
                    </h1>
                    <p className='mt-5 text-lg leading-relaxed text-ink-muted'>
                        Questions about AgentFactory, a demo for your team, or enterprise licensing? We usually reply within one business day.
                    </p>
                    <div className='mt-10 space-y-4'>
                        <a href={`mailto:${company.email.sales}`} className='card flex items-center gap-4 p-5 transition hover:border-violet/50'>
                            <Mail className='text-teal' />
                            <div>
                                <p className='text-sm font-semibold text-white'>Sales</p>
                                <p className='text-sm text-ink-dim'>{company.email.sales}</p>
                            </div>
                        </a>
                        <a href={`mailto:${company.email.support}`} className='card flex items-center gap-4 p-5 transition hover:border-violet/50'>
                            <MessageSquare className='text-teal' />
                            <div>
                                <p className='text-sm font-semibold text-white'>Support</p>
                                <p className='text-sm text-ink-dim'>{company.email.support}</p>
                            </div>
                        </a>
                    </div>
                </Reveal>
                <Reveal delay={0.1}>
                    <form onSubmit={submit} className='card space-y-5 p-8'>
                        <div className='grid gap-5 sm:grid-cols-2'>
                            <label className='block text-sm font-medium text-ink-muted'>
                                Name
                                <input required className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder='Alex Morgan' />
                            </label>
                            <label className='block text-sm font-medium text-ink-muted'>
                                Work email
                                <input
                                    required
                                    type='email'
                                    className={field}
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    placeholder='alex@company.com'
                                />
                            </label>
                        </div>
                        <div className='grid gap-5 sm:grid-cols-2'>
                            <label className='block text-sm font-medium text-ink-muted'>
                                Company
                                <input className={field} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder='Company Inc.' />
                            </label>
                            <label className='block text-sm font-medium text-ink-muted'>
                                Topic
                                <select className={field} value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })}>
                                    {Object.entries(topics).map(([k, v]) => (
                                        <option key={k} value={k}>
                                            {v}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <label className='block text-sm font-medium text-ink-muted'>
                            How can we help?
                            <textarea
                                required
                                rows={5}
                                className={field}
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                placeholder='Tell us about your use case…'
                            />
                        </label>
                        <button type='submit' className='btn-primary w-full'>
                            Send message <Send size={16} />
                        </button>
                    </form>
                </Reveal>
            </div>
        </section>
    )
}

export default Contact
