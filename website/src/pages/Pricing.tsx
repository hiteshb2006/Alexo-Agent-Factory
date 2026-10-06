import CtaBand from '@/components/CtaBand'
import Faq from '@/components/Faq'
import GlowBackground from '@/components/GlowBackground'
import PricingCards from '@/components/PricingCards'
import SectionHeading from '@/components/SectionHeading'
import { usePageMeta } from '@/lib/usePageMeta'

const Pricing = () => {
    usePageMeta('Pricing — AgentFactory by AlexoCloudAI')
    return (
        <>
            <section className='relative overflow-hidden pb-24 pt-36 sm:pt-44'>
                <GlowBackground variant='soft' />
                <div className='container relative'>
                    <SectionHeading
                        eyebrow='AgentFactory pricing'
                        title={<>Plans that grow <span className='text-gradient'>with your agents.</span></>}
                        lead='Self-hosted on your infrastructure, licensed per plan. Start with a 14-day free trial.'
                    />
                    <div className='mt-16'>
                        <PricingCards />
                    </div>
                </div>
            </section>
            <section className='container pb-12'>
                <SectionHeading eyebrow='FAQ' title='Questions, answered.' />
                <div className='mt-12'>
                    <Faq />
                </div>
            </section>
            <CtaBand />
        </>
    )
}

export default Pricing
