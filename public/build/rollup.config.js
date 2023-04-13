import svelte from 'rollup-plugin-svelte';

export default {
  input: 'src/App.svelte', // replace with the path to your Svelte file
  output: {
    file: 'public/build/bundle.js', // replace with the path where you want to output the compiled JS file
    format: 'iife',
  },
  plugins: [
    svelte(),
  ],
};