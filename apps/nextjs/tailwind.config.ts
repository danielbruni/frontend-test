// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config/tailwind.config";

const config: Pick<Config, "presets" | "theme"> = {
  presets: [sharedConfig],

  // Customizations specific to this project would go here
  theme: {
    extend: {},
  },
};

export default config;
