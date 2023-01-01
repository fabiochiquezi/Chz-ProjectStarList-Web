export const routes = {
  // Structure
  notFound: {
    path: '/404',
    route: '/404',
    state: 'mixed'
  },
  error: {
    path: '/error',
    route: '/error',
    state: 'mixed'
  },
  home: {
    path: '/home',
    route: '/home',
    state: 'public'
  },
  // Project
  newMovies: {
    path: '/new/movies',
    route: '/new/[type]',
    state: 'private'
  },
  newSeries: {
    path: '/new/series',
    route: '/new/[type]',
    state: 'private'
  },
  newBooks: {
    path: '/new/books',
    route: '/new/[type]',
    state: 'private'
  },
  newGames: {
    path: '/new/games',
    route: '/new/[type]',
    state: 'private'
  },
  user: {
    path: (userName: string) => `/${userName}`,
    route: '/[user]',
    state: 'mixed'
  },
  userDoing: {
    path: (userName: string) => `/${userName}?catalog=doing`,
    route: '/[user]',
    state: 'mixed'
  },
  userIlldo: {
    path: (userName: string) => `/${userName}?catalog=illdo`,
    route: '/[user]',
    state: 'mixed'
  },
  userDone: {
    path: (userName: string) => `/${userName}?catalog=done`,
    route: '/[user]',
    state: 'mixed'
  }
}

export const homeSystem = routes.newSeries
