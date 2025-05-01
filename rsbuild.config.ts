import { defineConfig } from '@rsbuild/core';

const SINGLE_HTML_BUILD = globalThis.process.env.SINGLE_HTML_BUILD === 'true'

export default defineConfig({
    output: {
        assetPrefix: './',
        inlineScripts: SINGLE_HTML_BUILD,
        inlineStyles: SINGLE_HTML_BUILD,
        dataUriLimit: SINGLE_HTML_BUILD ? 1 * 1024 * 1024 * 1024 : undefined,
        polyfill: 'usage',
    },
    html: {
        template: SINGLE_HTML_BUILD ? './src/index.html' : undefined,
    },
    tools: {
        rspack(config) {
            if (SINGLE_HTML_BUILD) {
                config.module.rules.push({
                    test: /\.worker\.(js|ts)$/,
                    loader: "worker-rspack-loader",
                    options: {
                        inline: "no-fallback",
                    },
                })
                config.module.parser.javascript.dynamicImportMode = "eager"
            }
        }
    },
})
