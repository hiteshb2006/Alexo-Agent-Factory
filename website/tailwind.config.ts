import type { Config } from 'tailwindcss'

export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        container: { center: true, padding: '1.25rem', screens: { '2xl': '1240px' } },
        extend: {
            colors: {
                navy: { DEFAULT: '#0B1220', 900: '#070C16', 800: '#0B1220', 700: '#111A2C', 600: '#172033' },
                charcoal: '#1F2937',
                teal: { DEFAULT: '#14D8C4', 300: '#8CEFE4', 600: '#0C9F91' },
                violet: { DEFAULT: '#7C3AED', 300: '#C4B5FD', 400: '#9B6BFF', 600: '#6D28D9' },
                coral: '#FF6B6B',
                cloud: '#F5F7FB',
                ink: { DEFAULT: '#E6EAF5', muted: '#AEB8D0', dim: '#8A96B8' }
            },
            fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
            backgroundImage: {
                'brand-gradient': 'linear-gradient(90deg, #7C3AED 0%, #4F7BEA 55%, #14D8C4 100%)'
            },
            keyframes: {
                float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
                pulseGlow: { '0%,100%': { opacity: '0.55' }, '50%': { opacity: '1' } },
                dash: { to: { strokeDashoffset: '-40' } },
                marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } }
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
                dash: 'dash 1.6s linear infinite',
                marquee: 'marquee 40s linear infinite'
            }
        }
    },
    plugins: []
} satisfies Config
