import { defineConfig } from '@tailwindcss/vite'

export default defineConfig({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fana-navy': '#1E2B4F',
        'fana-primary': '#125DA3',
        'fana-secondary': '#DBEDF9',
        'fana-white': '#FFFFFF',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'bold': '700',
        'black': '900',
      },
    },
  },
})
