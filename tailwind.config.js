/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0D0A',
        surface: '#12140F',
        surface2: '#181B13',
        platinum: '#E7E9E2',
        silvermid: '#A6AC9C',
        olive: '#7C8A55',
        olivebright: '#AFC96C',
        line: '#262920',
        muted: '#6C7263'
      },
      fontFamily: {
        displayen: ['var(--font-display-en)', 'sans-serif'],
        displayar: ['var(--font-display-ar)', 'sans-serif'],
        bodyen: ['var(--font-body-en)', 'sans-serif'],
        bodyar: ['var(--font-body-ar)', 'sans-serif']
      },
      keyframes: {
        pulse2: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' }
        },
        drift: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        sheen: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        pulse2: 'pulse2 2.2s ease-in-out infinite',
        drift: 'drift 6s ease-in-out infinite',
        sheen: 'sheen 6s linear infinite'
      }
    }
  },
  plugins: []
};
