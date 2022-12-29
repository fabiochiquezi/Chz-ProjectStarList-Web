// Paths
//
export const paths = {
  notFound: '/404',
  error: '/error',
  login: '/home',
  newMovies: '/new/movies',
  newSeries: '/new/series',
  newBooks: '/new/books',
  newGames: '/new/games',
  user: (userName: string) => `/${userName}`,
  userDoing: (userName: string) => `/${userName}?catalog=doing`,
  userIlldo: (userName: string) => `/${userName}?catalog=illdo`,
  userDone: (userName: string) => `/${userName}?catalog=done`
}

export const publicPaths = [paths.login]
export const privatePaths = [paths.newMovies, paths.newSeries, paths.newBooks, paths.newGames]
export const mixedPaths = [paths.notFound, paths.error]

export const isPathPublic = (path: string): boolean => publicPaths.includes(path)
export const isPathPrivate = (path: string): boolean => privatePaths.includes(path)
export const isPathMixed = (path: string): boolean => mixedPaths.includes(path)

export const isCurrentPathPrivate = (): boolean => isPathPrivate(window.location.pathname)
export const isCurrentPathMixed = (): boolean => isPathMixed(window.location.pathname)
export const isCurrentPathPublic = (): boolean => isPathPublic(window.location.pathname)

// Routes
//
export const routes = {
  notFound: '/404',
  error: '/error',
  login: '/home',
  user: '/[user]',
  new: '/new/[type]'
}

export const publicRoutes = [routes.login]
export const privateRoutes = [routes.new]
export const mixedRoutes = [routes.user, routes.notFound, paths.error]

export const isRoutePublic = (route: string): boolean => publicRoutes.includes(route)
export const isRoutePrivate = (route: string): boolean => privateRoutes.includes(route)
export const isRouteMixed = (route: string): boolean => mixedRoutes.includes(route)

export const isCurrentRoutePrivate = (): boolean => isRoutePrivate(window.location.pathname)
export const isCurrentRouteMixed = (): boolean => isRouteMixed(window.location.pathname)
export const isCurrentRoutePublic = (): boolean => isRoutePublic(window.location.pathname)

