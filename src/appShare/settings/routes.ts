export const routes = {
  notFound: {
    path: '/404',
    route: '/404',
    state: 'mixed',
    title: '404',
    menuSystem: false,
    multiContent: false
  },
  error: {
    path: '/error',
    route: '/error',
    state: 'mixed',
    title: '404',
    menuSystem: false,
    multiContent: false
  },
  home: {
    path: '/home',
    route: '/home',
    state: 'public',
    title: '404',
    menuSystem: false,
    multiContent: false
  },
  newMovies: {
    path: '/new/movies',
    route: '/new/[type]',
    state: 'private',
    title: 'NEW',
    menuSystem: true,
    multiContent: true
  },
  newSeries: {
    path: '/new/series',
    route: '/new/[type]',
    state: 'private',
    title: '404',
    menuSystem: false,
    multiContent: true
  },
  newBooks: {
    path: '/new/books',
    route: '/new/[type]',
    state: 'private',
    title: '404',
    menuSystem: false,
    multiContent: true
  },
  newGames: {
    path: '/new/games',
    route: '/new/[type]',
    state: 'private',
    title: '404',
    menuSystem: false,
    multiContent: true
  },
  user: {
    getPath: (userName: string) => `/${userName}`,
    route: '/[user]',
    state: 'mixed',
    title: 'MY LIST',
    menuSystem: true,
    multiContent: true
  },
  userDoing: {
    getPath: (userName: string) => `/${userName}?catalog=doing`,
    route: '/[user]',
    state: 'mixed',
    title: '404',
    menuSystem: false,
    multiContent: true
  },
  userIlldo: {
    getPath: (userName: string) => `/${userName}?catalog=illdo`,
    route: '/[user]',
    state: 'mixed',
    title: '404',
    menuSystem: false,
    multiContent: true
  },
  userDone: {
    getPath: (userName: string) => `/${userName}?catalog=done`,
    route: '/[user]',
    state: 'mixed',
    title: '404',
    menuSystem: false,
    multiContent: true
  }
}

export const homeSystem = routes.newMovies
