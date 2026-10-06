import { company } from '@/config/site'
import { usePageMeta } from '@/lib/usePageMeta'

/**
 * Placeholder legal pages. Replace the content with terms and a privacy policy
 * reviewed by your legal counsel before launch.
 */
const Legal = ({ kind }: { kind: 'terms' | 'privacy' }) => {
    const title = kind === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'
    usePageMeta(`${title} — ${company.name}`)
    return (
        <section className='container max-w-3xl pb-24 pt-36 sm:pt-44'>
            <p className='eyebrow'>Legal</p>
            <h1 className='mt-4 text-4xl font-bold tracking-tight text-white'>{title}</h1>
            <div className='card mt-10 p-8 leading-relaxed text-ink-muted'>
                <p>
                    Our {title.toLowerCase()} are being finalized and will be published here. For questions in the meantime, contact{' '}
                    <a className='text-teal hover:underline' href={`mailto:${company.email.hello}`}>
                        {company.email.hello}
                    </a>
                    .
                </p>
            </div>
        </section>
    )
}

export default Legal
