import { motion } from 'framer-motion'

/**
 * Animated "constellation" of agents: nodes pulse and data packets travel
 * along the connecting paths. Pure SVG, no canvas.
 */
const paths = [
    'M40 400 C140 380 170 290 260 270 S400 250 450 170 S540 80 580 60',
    'M260 270 C300 330 360 350 420 320',
    'M150 360 C180 450 260 470 330 440',
    'M450 170 C480 230 540 250 590 230'
]

const nodes = [
    { x: 40, y: 400, r: 14, c: '#14D8C4' },
    { x: 260, y: 270, r: 22, c: '#7C3AED', ring: true },
    { x: 450, y: 170, r: 13, c: '#14D8C4' },
    { x: 580, y: 60, r: 15, c: '#14D8C4' },
    { x: 420, y: 320, r: 9, c: '#2EE6D3' },
    { x: 330, y: 440, r: 9, c: '#9B6BFF' },
    { x: 590, y: 230, r: 8, c: '#C4B5FD' }
]

const AgentNetwork = ({ className }: { className?: string }) => (
    <svg viewBox='0 0 640 520' className={className} fill='none' aria-hidden>
        <defs>
            <linearGradient id='net-line' x1='0' y1='1' x2='1' y2='0'>
                <stop stopColor='#7C3AED' />
                <stop offset='1' stopColor='#14D8C4' />
            </linearGradient>
            <filter id='net-glow' x='-50%' y='-50%' width='200%' height='200%'>
                <feGaussianBlur stdDeviation='8' />
            </filter>
        </defs>
        {paths.map((d, i) => (
            <g key={d}>
                <motion.path
                    d={d}
                    stroke='url(#net-line)'
                    strokeWidth={i === 0 ? 3 : 2}
                    strokeOpacity={i === 0 ? 0.9 : 0.45}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.6, delay: 0.3 + i * 0.25, ease: 'easeInOut' }}
                />
                <circle r='4' fill='#fff'>
                    <animateMotion dur={`${3 + i}s`} repeatCount='indefinite' path={d} begin={`${1.5 + i * 0.4}s`} />
                </circle>
            </g>
        ))}
        {nodes.map((n, i) => (
            <motion.g
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.12, type: 'spring', stiffness: 160, damping: 14 }}
                style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            >
                <circle cx={n.x} cy={n.y} r={n.r + 8} fill={n.c} opacity='0.45' filter='url(#net-glow)' />
                {n.ring ? (
                    <>
                        <circle cx={n.x} cy={n.y} r={n.r} stroke='#C4B5FD' strokeWidth='7' fill='none' />
                        <circle cx={n.x} cy={n.y} r={n.r - 10} fill={n.c} />
                    </>
                ) : (
                    <circle cx={n.x} cy={n.y} r={n.r} fill={n.c} />
                )}
            </motion.g>
        ))}
    </svg>
)

export default AgentNetwork
