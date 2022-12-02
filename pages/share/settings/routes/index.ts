export const routes = {
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

export const publicRoutes = [routes.login, routes.catalog, routes.notFound]
export const privateRoutes = [routes.newMovies, routes.newSeries, routes.newBooks, routes.newGames]
export const mixedRoutes = [routes.catalog]

export const isPublic = (route: string): boolean => publicRoutes.includes(route)
export const isPrivate = (route: string): boolean => privateRoutes.includes(route)
export const isMixedRoute = (route: string): boolean => mixedRoutes.includes(route)
