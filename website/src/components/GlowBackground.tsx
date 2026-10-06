/** Decorative brand glows + dot grid placed behind a section. */
const GlowBackground = ({ variant = 'hero' }: { variant?: 'hero' | 'soft' }) => (
    <div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]' />
        <div
            className={`absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-violet/30 blur-[120px] ${
                variant === 'hero' ? 'animate-pulse-glow' : 'opacity-40'
            }`}
        />
        <div className='absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-teal/20 blur-[120px]' />
    </div>
)

export default GlowBackground
