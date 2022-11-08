export const routes = {
    login: '/',
    catalog: '/[user]',
    newMovies: '/new/movies',
    newSeries: '/new/series',
    newBooks: '/new/books',
    newGames: '/new/games'
}

export const publicRoutes = [routes.login, routes.catalog]
