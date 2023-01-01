import { publicPaths, privatePaths, mixedPaths, isPathPublic, isPathPrivate, isPathMixed } from './index'

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
    expect(publicPaths(routes)).toHaveLength(1)
  })
  it('privatePaths', () => {
    expect(privatePaths(routes)).toHaveLength(4)
  })
  it('mixedPaths', () => {
    expect(mixedPaths(routes)).toHaveLength(2)
  })

  it('isPathPublic', () => {
    expect(isPathPublic(routes)('/home')).toBeTruthy()
    expect(isPathPublic(routes)('/error')).toBeFalsy()
  })
  it('isPathPrivate', () => {
    expect(isPathPrivate(routes)('/new/movies')).toBeTruthy()
    expect(isPathPrivate(routes)('/home')).toBeFalsy()
  })
  it('isPathMixed', () => {
    expect(isPathMixed(routes)('/error')).toBeTruthy()
    expect(isPathMixed(routes)('/home')).toBeFalsy()
  })
})
