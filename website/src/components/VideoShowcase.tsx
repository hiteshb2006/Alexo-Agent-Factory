import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useRef, useState } from 'react'

/** The brand story film with a custom play overlay. */
const VideoShowcase = () => {
    const ref = useRef<HTMLVideoElement>(null)
    const [playing, setPlaying] = useState(false)

    const toggle = () => {
        const v = ref.current
        if (!v) return
        if (v.paused) {
            void v.play()
        } else {
            v.pause()
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className='relative mx-auto max-w-5xl'
        >
            <div className='absolute -inset-4 rounded-[32px] bg-brand-gradient opacity-30 blur-2xl' aria-hidden />
            <div className='relative overflow-hidden rounded-3xl border border-white/15 bg-navy-900'>
                <video
                    ref={ref}
                    className='aspect-video w-full'
                    poster='/video/agentfactory-story-poster.jpg'
                    preload='metadata'
                    playsInline
                    controls={playing}
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onEnded={() => setPlaying(false)}
                >
                    <source src='/video/agentfactory-story.webm' type='video/webm' />
                    <source src='/video/agentfactory-story.mp4' type='video/mp4' />
                </video>
                {!playing && (
                    <button
                        onClick={toggle}
                        className='group absolute inset-0 flex items-center justify-center bg-navy/30 transition hover:bg-navy/10'
                        aria-label='Play the AgentFactory story'
                    >
                        <span className='relative flex h-20 w-20 items-center justify-center rounded-full bg-white text-navy shadow-2xl transition group-hover:scale-110'>
                            <span className='absolute inset-0 animate-ping rounded-full bg-white/40' />
                            <Play size={30} className='relative ml-1' fill='currentColor' />
                        </span>
                    </button>
                )}
            </div>
        </motion.div>
    )
}

export default VideoShowcase
