import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					h1: {
  						fontSize: '2.5rem',
  						fontWeight: '800',
  						marginBottom: '2rem',
  					},
  					h2: {
  						fontSize: '2rem',
  						fontWeight: '700',
  						marginTop: '3rem',
  						marginBottom: '1.5rem',
  					},
  					h3: {
  						fontSize: '1.5rem',
  						fontWeight: '600',
  						marginTop: '2rem',
  						marginBottom: '1rem',
  					},
  				},
  			},
  		},
  		components: {
  			'.blog-image-full': {
  				'@apply relative w-full h-auto my-8': {},
  				'& img': {
  					'@apply rounded-lg w-full': {},
  				},
  				'& .caption': {
  					'@apply text-center text-sm text-muted-foreground italic mt-2 mb-12': {},
  				},
  			},
  			'.blog-image-half': {
  				'@apply relative w-full h-auto my-8': {},
  				'& img': {
  					'@apply rounded-lg w-[50%] mx-auto': {},
  				},
  				'& .caption': {
  					'@apply text-center text-sm text-muted-foreground italic mt-2 mb-12': {},
  				},
  			},
  			'.blog-image-grid': {
  				'@apply grid gap-4 my-8': {},
  				'& .grid-item': {
  					'@apply relative': {},
  					'& > div': {
  						'@apply relative aspect-square w-full': {},
  						'& img': {
  							'@apply object-cover rounded-lg': {},
  						},
  					},
  				},
  				'& .caption': {
  					'@apply text-center text-sm text-muted-foreground italic mt-2 mb-12': {},
  				},
  			},
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;

export default config;
