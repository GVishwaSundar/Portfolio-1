/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#030303',
          900: '#080808',
          850: '#0d0d0f',
          800: '#141416',
        },
        line: 'rgba(255, 255, 255, 0.12)',
        glass: 'rgba(255, 255, 255, 0.08)',
        accent: '#9ee7d8',
      },
      boxShadow: {
        glass: '0 24px 80px rgba(0, 0, 0, 0.28)',
        glow: '0 0 42px rgba(158, 231, 216, 0.1)',
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.12), transparent 35%)',
      },
    },
  },
  plugins: [],
}
