const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://xi4qhvlx.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;