import sharedConfig from "@repo/tailwind-config/tailwind.config";


/** @type {import('tailwindcss').Config} */
export default {
	presets: [sharedConfig],

	// Customizations specific to this project would go here
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
}
