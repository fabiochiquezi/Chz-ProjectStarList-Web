import { publicRoutes, privateRoutes, mixedRoutes, isRoutePublic, isRoutePrivate, isRouteMixed } from './index'

const routes: any = {
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
  }
}

describe('path', () => {
  it('publicPaths', () => {
    expect(publicRoutes(routes)).toHaveLength(1)
  })
  it('privatePaths', () => {
    expect(privateRoutes(routes)).toHaveLength(4)
  })
  it('mixedPaths', () => {
    expect(mixedRoutes(routes)).toHaveLength(2)
  })
  it('isRoutePublic', () => {
    expect(isRoutePublic(routes)('/home')).toBeTruthy()
    expect(isRoutePublic(routes)('/error')).toBeFalsy()
  })
  it('isRoutePrivate', () => {
    expect(isRoutePrivate(routes)('/new/[type]')).toBeTruthy()
    expect(isRoutePrivate(routes)('/home')).toBeFalsy()
  })
  it('isRouteMixed', () => {
    expect(isRouteMixed(routes)('/error')).toBeTruthy()
    expect(isRouteMixed(routes)('/home')).toBeFalsy()
  })
})
