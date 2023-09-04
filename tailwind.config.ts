import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          text: '#A45A04',
          pink: '#FFF9F6',
          gray: '#B3B3B3',
          orange: '#FFDBC9',
        },
        secondary: {
          text: '#CF9E86',
          gray: '#F5F5F5',
          orange: '#FFF9F6',
        }
      },
      fontFamily: {
        inter: "var(--font-inter)",
        "space-grotesk": "var(--font-space-grotesk)",
      },
    },
  },
  plugins: [],
}
export default config
