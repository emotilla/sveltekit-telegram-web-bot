import adapter from '@sveltejs/adapter-node';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ out: 'build' })
	},
	preprocess: [
	  preprocess({
		postcss: true,
	  }),
	],
};

export default config;
