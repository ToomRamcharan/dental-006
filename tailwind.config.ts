import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./pages/**/*{js,ts,jsx,tsx,mdx}', './components/**/*{js,ts,jsx,tsx,mdx}', './app/**/*{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { primary: { DEFAULT: '#f97316', rgb: '249,115,22' }, accent: { DEFAULT: '#8b5cf6', rgb: '139,92,246' } }, fontFamily: { heading: ['Outfit', 'serif'], body: ['Inter', 'sans-serif'] } } },
  plugins: [],
};
export default config;