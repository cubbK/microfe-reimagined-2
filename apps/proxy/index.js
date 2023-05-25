const http = require('http')
const httpProxy = require('http-proxy')

const proxy = httpProxy.createProxyServer({})

const proxyRoutes = {
  '/home': { targetPort: 3000 },
  '/_next': { targetPort: 3000 },

  '/about': { targetPort: 3001 },
  '/_nuxt': { targetPort: 3001 },
}

const server = http.createServer((req, res) => {
  const route = Object.entries(proxyRoutes).find(
    ([path]) => console.log(req.url) || req.url.startsWith(path)
  )

  if (route) {
    const [path, { targetPort }] = route
    proxy.web(req, res, { target: `http://localhost:${targetPort}` }, (err) => {
      console.error('Error:', err)
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('Something went wrong.')
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not found from proxy')
  }
})

const proxyPort = 3005
server.listen(proxyPort, () => {
  console.log(`Reverse proxy is listening on port ${proxyPort}`)
})
