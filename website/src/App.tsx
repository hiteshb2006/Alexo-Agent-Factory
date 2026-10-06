import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import AgentFactory from '@/pages/AgentFactory'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import Legal from '@/pages/Legal'
import NotFound from '@/pages/NotFound'
import Pricing from '@/pages/Pricing'

const ScrollToTop = () => {
    const { pathname, hash } = useLocation()
    useEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
        } else {
            window.scrollTo(0, 0)
        }
    }, [pathname, hash])
    return null
}

const App = () => (
    <div className='flex min-h-screen flex-col'>
        <ScrollToTop />
        <Navbar />
        <main className='flex-1'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/agentfactory' element={<AgentFactory />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/terms' element={<Legal kind='terms' />} />
                <Route path='/privacy' element={<Legal kind='privacy' />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
    </div>
)

export default App
