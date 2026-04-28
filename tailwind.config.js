/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050A12',
        navy: '#07111F',
        cyan: '#22D3EE',
        blue: '#2563EB',
        lime: '#84CC16',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 32px rgba(34, 211, 238, 0.18)',
        limeGlow: '0 0 32px rgba(132, 204, 22, 0.18)',
      },
    },
  },
  plugins: [],
};
