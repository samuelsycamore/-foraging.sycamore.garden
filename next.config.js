const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' plausible.io;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

module.exports = withBundleAnalyzer({
  async redirects() {
    return [
      {
        source: '/plants/edible-wild-autumn-olives',
        destination: '/plants/autumn-olives',
        permanent: true,
      },
      {
        source: '/plants/edible-wild-raspberries-blackberries',
        destination: '/plants/brambleberries',
        permanent: true,
      },
      {
        source: '/plants/edible-wild-chickweed',
        destination: '/plants/chickweed',
        permanent: true,
      },
      {
        source: '/plants/edible-wild-elderberries',
        destination: '/plants/elderberries',
        permanent: true,
      },
      {
        source: '/plants/edible-wild-garlic-mustard',
        destination: '/plants/garlic-mustard',
        permanent: true,
      },
      {
        source: '/plants/edible-wild-hairy-bittercress',
        destination: '/plants/hairy-bittercress',
        permanent: true,
      },
      {
        source: '/plants/edible-wild-spinach-lambsquarters',
        destination: '/plants/lambsquarters',
        permanent: true,
      },
      {
        source: '/plants/edible-wild-mulberries',
        destination: '/plants/mulberries',
        permanent: true,
      },
      {
        source: '/plants/edible-wild-mustard',
        destination: '/plants/mustard',
        permanent: true,
      },
      {
        source: '/plants/edible-wild-onions-garlic',
        destination: '/plants/onions',
        permanent: true,
      },
      {
        source: '/plants/edible-wild-pawpaws',
        destination: '/plants/pawpaws',
        permanent: true,
      },
      {
        source: '/plants/edible-wild-purslane',
        destination: '/plants/purslane',
        permanent: true,
      },
      {
        source: '/plants/edible-wild-sumac',
        destination: '/plants/sumac',
        permanent: true,
      },
      {
        source: '/plants/edible-wild-wood-sorrel',
        destination: '/plants/wood-sorrel',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
})
