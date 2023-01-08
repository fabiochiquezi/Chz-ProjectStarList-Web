import { signIn } from './signIn'
import { signOut } from './signOut'
import { User } from 'firebase/auth'
import { UserAuth } from '../../domain'
import { useRouter } from 'next/router'
import { AuthUseContext } from './useAuth'
import { AuthFirebase } from '../../events'
import { FC, ReactNode, useEffect } from 'react'
import { useReducerAuth } from './useReducerAuth'
import { LoadingHOC } from '../../../libs/frontend/HOC'
import { routes } from '../../../appShare/settings/routes'
import { isRouteMixed, isRoutePrivate } from '../../../libs/helpers'
import { pipeArg } from './../../../libs/helpers/functional/asyncPipe'
import { isCurrentPathPrivate } from './../../../libs/helpers/front/path'

type IAuth = FC<{
  children: ReactNode
  afterSignUpCB: (user: User) => Promise<User>
}>

const Auth: IAuth = ({ children, afterSignUpCB }) => {
  const { push, route } = useRouter()
  const { authState } = AuthFirebase
  const { unloading, loading, defineNoUser, defineUser, user } = useReducerAuth()

  useEffect(() => {
    type IRuleFn = (userFire: UserAuth | null) => Promise<boolean> | Promise<unknown>
    const loadIsFalse = (): boolean => !user.load
    const userIsntDefined = (): boolean => !user.data

    const rulePrivateRoute: IRuleFn = async userFire =>
      (isCurrentPathPrivate(routes) && !userFire) && await push(routes.home.path)

    const ruleUserOn: IRuleFn = async userFire =>
      !(loadIsFalse() || !(userIsntDefined() && userFire)) && defineUser(userFire)

    const ruleUserOff: IRuleFn = async userFire =>
      (!(loadIsFalse() || userFire) && await defineNoUser())

    const runRulles = authState(async userAuth =>
      await pipeArg(rulePrivateRoute, ruleUserOn, ruleUserOff)(userAuth))

    return runRulles
  }, [])

  function getView(): ReactNode {
    const isRoutePrivateFn = isRoutePrivate(routes)
    const isRouteMixedFn = isRouteMixed(routes)
    const isPrivate_NoUser = isRoutePrivateFn(route) && !user.data
    const isMixed_UserUndefined = isRouteMixedFn(route) && user.data === undefined
    const testAllowAccess = isPrivate_NoUser || isMixed_UserUndefined
    const View = testAllowAccess ? null : children
    return View
  }

  return (
    <AuthUseContext.Provider
      data-testid="AuthProvider"
      value={{
        user: user.data,
        signIn: signIn(afterSignUpCB)(unloading),
        signOut: signOut(loading, unloading)
      }}
    >
      <LoadingHOC condition={user.load}>
        {getView()}
      </LoadingHOC>
    </AuthUseContext.Provider >
  )
}

export { Auth }
