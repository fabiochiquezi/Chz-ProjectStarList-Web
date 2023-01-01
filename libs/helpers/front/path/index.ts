type IGetRoutes = (routes: Record<any, any>) =>
  Array<string | ((route: string) => string)>

type ITestRoute = (routeList: Record<any, any>) =>
  (route: string) => boolean

type ITestCurrentRoute = (routes: Record<any, any>) =>
  boolean

interface IRoute {
  name: string;
  path: string | ((path: string) => string);
  route: string;
  state: string
}

const routesToArray = <T>(obj: Record<string, string>): T => Object
  .entries(obj)
  .map((el: any) => ({ name: el[0], ...el[1] })) as T

const publicPaths: IGetRoutes = routes => routesToArray<IRoute[]>(routes)
  .filter(route => (route.state === 'public'))
  .map(route => route.path)

const privatePaths: IGetRoutes = routes => routesToArray<IRoute[]>(routes)
  .filter(route => route.state === 'private')
  .map(route => route.path)

const mixedPaths: IGetRoutes = routes => routesToArray<IRoute[]>(routes)
  .filter(route => route.state === 'mixed')
  .map(route => route.path)

const isPathPublic: ITestRoute = routeList => path =>
  publicPaths(routeList).includes(path)

const isPathPrivate: ITestRoute = routeList => path =>
  privatePaths(routeList).includes(path)

const isPathMixed: ITestRoute = routeList => path =>
  mixedPaths(routeList).includes(path)

const isCurrentPathPrivate: ITestCurrentRoute = routes =>
  isPathPrivate(routes)(window.location.pathname)

const isCurrentPathMixed: ITestCurrentRoute = routes =>
  isPathMixed(routes)(window.location.pathname)

const isCurrentPathPublic: ITestCurrentRoute = routes =>
  isPathPublic(routes)(window.location.pathname)

export {
  routesToArray,
  publicPaths,
  privatePaths,
  mixedPaths,
  isPathPublic,
  isPathPrivate,
  isPathMixed,
  isCurrentPathPrivate,
  isCurrentPathMixed,
  isCurrentPathPublic
}
