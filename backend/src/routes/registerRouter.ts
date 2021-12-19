import { sysParameter } from '@/config'
import index from './index'
import _ from 'lodash'

// auth
function register(app, ...routers) {
  _.each(routers, (router) => {
    app.use(`/api/${sysParameter.version}/auth`, router)
  })
}

// set routes
function setRoutes(app) {
  let routers = []

  app.use(`/api/${sysParameter.version}`, index)

  register(app, ...routers)
}

export default setRoutes
