import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const isProduction = process.env.NODE_ENV == 'production' ? true : false
const productionBaseDirectory = 'tools'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess({})],

  kit: {
    adapter: adapter({
      pages: productionBaseDirectory,
      assets: productionBaseDirectory,
    }),
    paths: isProduction
      ? {
          base: `/${productionBaseDirectory}`,
        }
      : {},

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },
}

export default config