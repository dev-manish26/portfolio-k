import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'minecraft': ['var(--font-minecraft)', 'monospace'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'league-spartan': ['var(--font-league-spartan)', 'sans-serif'],
        'nagasaki': ['var(--font-nagasaki)', 'serif'],
        'dune-rise': ['var(--font-dune-rise)', 'serif'],
        'impact1': ['var(--font-impact1)', 'sans-serif'],
        'impact2': ['var(--font-impact2)', 'sans-serif'],
        'impact3': ['var(--font-impact3)', 'sans-serif'],
        'minecraft-alt': ['var(--font-minecraft-alt)', 'monospace'],
        'norwester': ['var(--font-norwester)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config