export const publicPaths = [paths.login]
export const privatePaths = [paths.newMovies, paths.newSeries, paths.newBooks, paths.newGames]
export const mixedPaths = [paths.notFound, paths.error]

export const isPathPublic = (path: string): boolean => publicPaths.includes(path)
export const isPathPrivate = (path: string): boolean => privatePaths.includes(path)
export const isPathMixed = (path: string): boolean => mixedPaths.includes(path)

export const isCurrentPathPrivate = (): boolean => isPathPrivate(window.location.pathname)
export const isCurrentPathMixed = (): boolean => isPathMixed(window.location.pathname)
export const isCurrentPathPublic = (): boolean => isPathPublic(window.location.pathname)
