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

export const publicPaths = [paths.login]
export const privatePaths = [paths.newMovies, paths.newSeries, paths.newBooks, paths.newGames]
export const mixedPaths = [paths.catalog, paths.notFound]

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

export const publicRoutes = [routes.login]
export const privateRoutes = [routes.new]
export const mixedRoutes = [routes.catalog, routes.notFound]

export const isRoutePublic = (route: string): boolean => publicRoutes.includes(route)
export const isRoutePrivate = (route: string): boolean => privateRoutes.includes(route)
export const isRouteMixed = (route: string): boolean => mixedRoutes.includes(route)
