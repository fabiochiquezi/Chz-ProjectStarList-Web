export const routes = {
  notFound: {
    path: '/404',
    route: '/404',
    state: 'mixed',
    title: '404',
    menuSystem: false
  },
  error: {
    path: '/error',
    route: '/error',
    state: 'mixed',
    title: '404',
    menuSystem: false
  },
  home: {
    path: '/home',
    route: '/home',
    state: 'public',
    title: '404',
    menuSystem: false
  },
  newMovies: {
    path: '/new/movies',
    route: '/new/[type]',
    state: 'private',
    title: 'NEW',
    menuSystem: true
  },
  newSeries: {
    path: '/new/series',
    route: '/new/[type]',
    state: 'private',
    title: '404',
    menuSystem: false
  },
  newBooks: {
    path: '/new/books',
    route: '/new/[type]',
    state: 'private',
    title: '404',
    menuSystem: false
  },
  newGames: {
    path: '/new/games',
    route: '/new/[type]',
    state: 'private',
    title: '404',
    menuSystem: false
  },
  user: {
    getPath: (userName: string) => `/${userName}`,
    route: '/[user]',
    state: 'mixed',
    title: 'MY LIST',
    menuSystem: true
  },
  userDoing: {
    getPath: (userName: string) => `/${userName}?catalog=doing`,
    route: '/[user]',
    state: 'mixed',
    title: '404',
    menuSystem: false
  },
  userIlldo: {
    getPath: (userName: string) => `/${userName}?catalog=illdo`,
    route: '/[user]',
    state: 'mixed',
    title: '404',
    menuSystem: false
  },
  userDone: {
    getPath: (userName: string) => `/${userName}?catalog=done`,
    route: '/[user]',
    state: 'mixed',
    title: '404',
    menuSystem: false
  }
}

export const homeSystem = routes.newMovies
