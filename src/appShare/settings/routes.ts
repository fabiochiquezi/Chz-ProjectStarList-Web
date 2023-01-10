export const routes = {
  notFound: {
    path: '/404',
    route: '/404',
    state: 'mixed',
    title: '404',
    menuSystem: false,
    multiContent: false,
    icon: null,
    iconActive: null
  },
  error: {
    path: '/error',
    route: '/error',
    state: 'mixed',
    title: '404',
    menuSystem: false,
    multiContent: false,
    icon: null,
    iconActive: null
  },
  home: {
    path: '/home',
    route: '/home',
    state: 'public',
    title: '404',
    menuSystem: false,
    multiContent: false,
    icon: null,
    iconActive: null
  },
  newMovies: {
    path: '/new/movies',
    route: '/new/[type]',
    state: 'private',
    title: 'NEW',
    menuSystem: true,
    multiContent: true,
    icon: '../icons/IconList.svg',
    iconActive: '../icons/IconListActive.svg'
  },
  newSeries: {
    path: '/new/series',
    route: '/new/[type]',
    state: 'private',
    title: '404',
    menuSystem: false,
    multiContent: true,
    icon: './icons/IconList.svg',
    iconActive: './icons/IconListActive.svg'
  },
  newBooks: {
    path: '/new/books',
    route: '/new/[type]',
    state: 'private',
    title: '404',
    menuSystem: false,
    multiContent: true,
    icon: './icons/IconList.svg',
    iconActive: './icons/IconListActive.svg'
  },
  newGames: {
    path: '/new/games',
    route: '/new/[type]',
    state: 'private',
    title: '404',
    menuSystem: false,
    multiContent: true,
    icon: './icons/IconList.svg',
    iconActive: './icons/IconListActive.svg'
  },
  user: {
    getPath: (userName: string) => `/${userName}`,
    route: '/[user]',
    state: 'mixed',
    title: 'MY LIST',
    menuSystem: true,
    multiContent: true,
    icon: '../icons/IconStar.svg',
    iconActive: '../icons/IconStarActive.svg'
  },
  userDoing: {
    getPath: (userName: string) => `/${userName}?catalog=doing`,
    route: '/[user]',
    state: 'mixed',
    title: '404',
    menuSystem: false,
    multiContent: true,
    icon: './icons/IconHome.svg',
    iconActive: './icons/IconHomeActive.svg'
  },
  userIlldo: {
    getPath: (userName: string) => `/${userName}?catalog=illdo`,
    route: '/[user]',
    state: 'mixed',
    title: '404',
    menuSystem: false,
    multiContent: true,
    icon: './icons/IconHome.svg',
    iconActive: './icons/IconHomeActive.svg'
  },
  userDone: {
    getPath: (userName: string) => `/${userName}?catalog=done`,
    route: '/[user]',
    state: 'mixed',
    title: '404',
    menuSystem: false,
    multiContent: true,
    icon: './icons/IconHome.svg',
    iconActive: './icons/IconHomeActive.svg'
  }
}

export const homeSystem = routes.newMovies
