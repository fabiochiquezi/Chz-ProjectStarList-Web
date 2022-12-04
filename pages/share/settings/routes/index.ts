// Paths
export const paths = {
  // Public routes
  notFound: '/404',
  login: '/home',
  // Mixed Routes
  catalog: '/[user]',
  // Private routes
  newMovies: '/new/movies',
  newSeries: '/new/series',
  newBooks: '/new/books',
  newGames: '/new/games'
}

export const publicPaths = [paths.login, paths.notFound, paths.catalog]
export const privatePaths = [paths.newMovies, paths.newSeries, paths.newBooks, paths.newGames]
export const mixedPaths = [paths.catalog]

export const isPathPublic = (path: string): boolean => publicPaths.includes(path)
export const isPathPrivate = (path: string): boolean => privatePaths.includes(path)
export const isPathMixed = (path: string): boolean => mixedPaths.includes(path)

// Routes
export const routes = {
  // Public routes
  notFound: '/404',
  login: '/home',
  // Mixed Routes
  catalog: '/[user]',
  // Private routes
  new: '/new/[type]'
}

export const publicRoutes = [routes.login, routes.notFound, routes.catalog]
export const privateRoutes = [routes.new]
export const mixedRoutes = [routes.catalog]

export const isRoutePublic = (route: string): boolean => publicRoutes.includes(route)
export const isRoutePrivate = (route: string): boolean => privateRoutes.includes(route)
export const isRouteMixed = (route: string): boolean => mixedRoutes.includes(route)
