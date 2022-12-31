export const isRoutePublic = (route: string) => (routes: string[]): boolean => publicRoutes.includes(route)
export const isRoutePrivate = (route: string) => (routes: string[]): boolean => privateRoutes.includes(route)
export const isRouteMixed = (route: string) => (routes: string[]): boolean => mixedRoutes.includes(route)

export const isCurrentRoutePrivate = (): boolean => isRoutePrivate(window.location.pathname)
export const isCurrentRouteMixed = (): boolean => isRouteMixed(window.location.pathname)
export const isCurrentRoutePublic = (): boolean => isRoutePublic(window.location.pathname)
