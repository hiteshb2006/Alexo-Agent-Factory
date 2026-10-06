import { Github, Mail, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company, links, products } from '@/config/site'

const Footer = () => (
    <footer className='relative border-t border-white/10 bg-navy-900'>
        <div className='container grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]'>
            <div>
                <img src='/brand/alexocloudai_dark.svg' alt='AlexoCloudAI' className='h-8 w-auto' />
                <p className='mt-5 max-w-xs text-sm leading-relaxed text-ink-dim'>{company.tagline}</p>
                <div className='mt-6 flex gap-3'>
                    <a href={company.social.x} aria-label='AlexoCloudAI on X' className='rounded-full border border-white/10 p-2 text-ink-muted hover:text-white'>
                        <Twitter size={16} />
                    </a>
                    <a href={company.social.github} aria-label='GitHub' className='rounded-full border border-white/10 p-2 text-ink-muted hover:text-white'>
                        <Github size={16} />
                    </a>
                    <a href={`mailto:${company.email.hello}`} aria-label='Email us' className='rounded-full border border-white/10 p-2 text-ink-muted hover:text-white'>
                        <Mail size={16} />
                    </a>
                </div>
            </div>
            <div>
                <h3 className='text-sm font-semibold text-white'>Products</h3>
                <ul className='mt-4 space-y-3 text-sm text-ink-dim'>
                    {products.map((p) => (
                        <li key={p.slug}>
                            {p.href ? (
                                <Link to={p.href} className='hover:text-white'>
                                    {p.name}
                                </Link>
                            ) : (
                                <span>
                                    {p.name} <span className='ml-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider'>Soon</span>
                                </span>
                            )}
                        </li>
                    ))}
                    <li>
                        <Link to='/pricing' className='hover:text-white'>
                            Pricing
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='text-sm font-semibold text-white'>Resources</h3>
                <ul className='mt-4 space-y-3 text-sm text-ink-dim'>
                    <li>
                        <a href={links.docs} className='hover:text-white'>
                            Documentation
                        </a>
                    </li>
                    <li>
                        <a href={links.login} className='hover:text-white'>
                            Customer portal
                        </a>
                    </li>
                    <li>
                        <a href={`mailto:${company.email.support}`} className='hover:text-white'>
                            Support
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='text-sm font-semibold text-white'>Company</h3>
                <ul className='mt-4 space-y-3 text-sm text-ink-dim'>
                    <li>
                        <Link to='/contact' className='hover:text-white'>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to='/terms' className='hover:text-white'>
                            Terms
                        </Link>
                    </li>
                    <li>
                        <Link to='/privacy' className='hover:text-white'>
                            Privacy
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='border-t border-white/5'>
            <div className='container flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-dim sm:flex-row'>
                <p>
                    © {new Date().getFullYear()} {company.name}. All rights reserved.
                </p>
                <p>{company.location}</p>
            </div>
        </div>
    </footer>
)

export default Footer
