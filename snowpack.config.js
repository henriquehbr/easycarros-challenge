/** @type {import('snowpack').SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist'
  },
  alias: {
    '@components': './src/components',
    '@pages': './src/pages'
  },
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020'
  },
  plugins: ['@snowpack/plugin-svelte']
}
