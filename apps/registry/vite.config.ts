import { defineConfig } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import { staticAssetsAdapter } from "@vinext/cloudflare/cache/static-assets-adapter";

export default defineConfig({
  plugins: [
    // vinext injects @mdx-js/rollup for .mdx files, but only when the package
    // is installed; @next/mdx's webpack loader is ignored. withMDX() passes no
    // remark/rehype plugins here, so the injected defaults match next.config.
    vinext({
      cache: { cdn: staticAssetsAdapter() },
      prerender: { routes: "*" },
    }),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
});
