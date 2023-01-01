type IGetRoutes = (routes: Record<any, any>) =>
  Array<string | ((route: string) => string)>

type ITestRoute = (routeList: Record<any, any>) =>
  (route: string) => boolean

interface IRoute {
  name: string;
  path: string | ((path: string) => string);
  route: string;
  state: string
}

const routesToArray = <T>(obj: Record<any, any>): T => Object
  .entries(obj)
  .map((el: any) => ({ name: el[0], ...el[1] })) as T

const publicRoutes: IGetRoutes = routes => routesToArray<IRoute[]>(routes)
  .filter(route => (route.state === 'public'))
  .map(route => route.route)

const privateRoutes: IGetRoutes = routes => routesToArray<IRoute[]>(routes)
  .filter(route => route.state === 'private')
  .map(route => route.route)

const mixedRoutes: IGetRoutes = routes => routesToArray<IRoute[]>(routes)
  .filter(route => route.state === 'mixed')
  .map(route => route.route)

const isRoutePublic: ITestRoute = routeList => route =>
  publicRoutes(routeList).includes(route)

const isRoutePrivate: ITestRoute = routeList => route =>
  privateRoutes(routeList).includes(route)

const isRouteMixed: ITestRoute = routeList => route =>
  mixedRoutes(routeList).includes(route)

export {
  routesToArray,
  publicRoutes,
  privateRoutes,
  mixedRoutes,
  isRoutePublic,
  isRoutePrivate,
  isRouteMixed
}
