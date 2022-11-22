export const routes = {
    notFound: '/404',
    login: '/home',
    catalog: '/[user]',
    newMovies: '/new/movies',
    newSeries: '/new/series',
    newBooks: '/new/books',
    newGames: '/new/games'
}

export const publicRoutes = [routes.login, routes.catalog, routes.notFound]
