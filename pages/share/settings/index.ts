export { app, auth, db } from './firebase/settings'

export { successMsg } from './msgs/successMsg'
export { errorMsg } from './msgs/errorMsg'

export {
  paths,
  publicPaths,
  privatePaths,
  mixedPaths,
  isPathPrivate,
  isPathMixed,
  isPathPublic,

  routes,
  publicRoutes,
  privateRoutes,
  mixedRoutes,
  isRoutePrivate,
  isRouteMixed,
  isRoutePublic
} from './routes'
