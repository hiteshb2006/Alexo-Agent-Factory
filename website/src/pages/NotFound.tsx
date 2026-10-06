import { Link } from 'react-router-dom'
import AgentNetwork from '@/components/AgentNetwork'

const NotFound = () => (
    <section className='container flex min-h-[70vh] flex-col items-center justify-center pt-24 text-center'>
        <AgentNetwork className='w-72 opacity-80' />
        <h1 className='mt-6 text-4xl font-bold text-white'>This agent got lost.</h1>
        <p className='mt-3 text-ink-muted'>The page you are looking for doesn&apos;t exist.</p>
        <Link to='/' className='btn-primary mt-8'>
            Back home
        </Link>
    </section>
)

export default NotFound
