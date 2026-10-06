import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { links } from '@/config/site'

const nav = [
    { to: '/agentfactory', label: 'AgentFactory' },
    { to: '/agentfactory#features', label: 'Features' },
    { to: '/pricing', label: 'Pricing' },
    { to: links.docs, label: 'Docs', external: true },
    { to: '/contact', label: 'Contact' }
]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => setOpen(false), [location])
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled ? 'border-b border-white/10 bg-navy/80 backdrop-blur-xl' : 'bg-transparent'
            }`}
        >
            <div className='container flex h-16 items-center justify-between'>
                <Link to='/' aria-label='AlexoCloudAI home' className='flex items-center'>
                    <img src='/brand/alexocloudai_dark.svg' alt='AlexoCloudAI' className='h-8 w-auto' />
                </Link>
                <nav className='hidden items-center gap-8 md:flex'>
                    {nav.map((item) =>
                        item.external ? (
                            <a key={item.label} href={item.to} className='text-sm font-medium text-ink-muted transition hover:text-white'>
                                {item.label}
                            </a>
                        ) : (
                            <NavLink
                                key={item.label}
                                to={item.to}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition hover:text-white ${
                                        isActive && !item.to.includes('#') ? 'text-white' : 'text-ink-muted'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        )
                    )}
                </nav>
                <div className='hidden items-center gap-3 md:flex'>
                    <a href={links.login} className='text-sm font-medium text-ink-muted transition hover:text-white'>
                        Log in
                    </a>
                    <a href={links.signup} className='btn-primary !px-5 !py-2.5'>
                        Start free trial
                    </a>
                </div>
                <button
                    className='rounded-lg p-2 text-white md:hidden'
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className='overflow-hidden border-b border-white/10 bg-navy/95 backdrop-blur-xl md:hidden'
                    >
                        <div className='container flex flex-col gap-1 py-4'>
                            {nav.map((item) =>
                                item.external ? (
                                    <a key={item.label} href={item.to} className='rounded-lg px-3 py-3 text-ink-muted hover:bg-white/5'>
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link key={item.label} to={item.to} className='rounded-lg px-3 py-3 text-ink-muted hover:bg-white/5'>
                                        {item.label}
                                    </Link>
                                )
                            )}
                            <div className='mt-3 flex gap-3'>
                                <a href={links.login} className='btn-ghost flex-1'>
                                    Log in
                                </a>
                                <a href={links.signup} className='btn-primary flex-1'>
                                    Free trial
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Navbar
