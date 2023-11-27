import sharedConfig from "@repo/tailwind-config/tailwind.config";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [sharedConfig],

  // Customizations specific to this project would go here
  content: [
      './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

