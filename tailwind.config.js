/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#123A7D', // Bleu profond
          dark: '#0F172A',    // Bleu nuit
          light: '#1FB6FF',   // Bleu ciel
        },
        secondary: {
          DEFAULT: '#176B87', // Teal
          light: '#38BDF8',   // Bleu clair
        },
        accent: {
          yellow: '#FFC857',  // Jaune doux
          coral: '#F97362',   // Corail
          purple: '#7C3AED',  // Violet électrique
          green: '#58B368',   // Vert doux
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F5F7FA',
          200: '#E5E7EB',
          300: '#E2E8F0',
          400: '#8A94A6',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
