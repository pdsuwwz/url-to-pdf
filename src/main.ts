import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import Cors from '@koa/cors'
import { PORT } from '@/config'
import routes from '@/routes'
import { getLocalAddress } from '@/utils'

const app: Koa = new Koa()
const router: Router = new Router()


// routes
routes.forEach((route) => {
  const params = [
    route.path,
    route.action
  ]
  router[route.method](...params)
})

app.use(Cors())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, () => {
  console.clear()

  const address = getLocalAddress()
  const localhost = address[Object.keys(address)[0]]?.[0]

  const blank1 = ''.padStart(1)
  const blank2 = ''.padStart(2)

  console.log(
    '\n',
    blank1,
    '🚀🚀🚀',
    '\x1b[32m',
    'Puppeteer Server running at:\n',
    '\x1b[0m'
  )
  console.log(
    blank2,
    '> Local:  ',
    '\x1b[36m',
    `http://localhost:${PORT}/`,
    '\x1b[0m'
  )
  console.log(
    blank2,
    '> Network:',
    '\x1b[36m',
    `http://${localhost}:${PORT}/\n`,
    '\x1b[0m'
  )
})
