const { DOCS_URL } = process.env
const path = require('path')
module.exports = {
  async rewrites() {
    return []
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    return config
  },
}
