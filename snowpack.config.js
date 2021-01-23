/** @type {import('snowpack').SnowpackUserConfig } */
module.exports = {
  packageOptions: {
    knownEntrypoints: ['svelte-mui/src/Ripple.svelte']
  },
  mount: {
    public: '/',
    src: '/dist'
  },
  alias: {
    '@components': './src/components',
    '@pages': './src/pages',
    '@assets': './public/assets'
  },
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020'
  },
  plugins: ['@snowpack/plugin-svelte']
}
