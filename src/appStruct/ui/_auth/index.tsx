import { signIn } from './signIn'
import { signOut } from './signOut'
import { User } from 'firebase/auth'
import { UserAuth } from '../../domain'
import { useRouter } from 'next/router'
import { AuthFirebase } from '../../events'
import { useReducerAuth } from './useReducerAuth'
import { LoadingHOC } from '../../../libs/frontend/HOC'
import { FC, ReactNode, useEffect, useState } from 'react'
import { routes } from '../../../appShare/settings/routes'
import { pipeArg } from './../../../libs/functional/asyncPipe'
import { AuthUseContext } from '../../../appShare/contexts/useAuth'
import { isRouteMixed, isRoutePrivate, isCurrentPathPrivate } from '../../../libs/frontend/fns'

type IAuth = FC<{
  children: ReactNode
  afterSignUpCB: (user: User) => Promise<User>
}>

const Auth: IAuth = ({ children, afterSignUpCB }) => {
  const { push, route } = useRouter()
  const { authState } = AuthFirebase
  const { unloading, loading, defineNoUser, defineUser, user } = useReducerAuth()
  const [signInProcess, setSignInProcess] = useState(false)

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
        signInProcess: signInProcess,
        user: user.data,
        signIn: signIn(afterSignUpCB)(unloading, setSignInProcess),
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
