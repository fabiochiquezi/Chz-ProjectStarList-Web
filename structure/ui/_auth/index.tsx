import { UserAuth } from '../../domain'
import { useRouter } from 'next/router'
import { AuthUseContext } from './useAuth'
import { AuthFirebase } from '../../events'
import { FC, ReactNode, useEffect } from 'react'
import { useReducerAuth } from './useReducerAuth'
import { ProtectRoute } from './components/Protect'
import { LoadingHOC } from '../../../libs/frontend/components'
import { routes } from '../../../src/pages/routes'
import { isCurrentPathPrivate } from 'libs/helpers/front/path'

const Auth: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()
  const { authState } = AuthFirebase
  const { signIn, signOut, defineNoUser, defineUser, user } = useReducerAuth()
  const loadIsFalse = (): boolean => !user.load
  const userIsntDefined = (): boolean => !user.data

  type IRulePrivateRoute = (userFire: UserAuth | null) => Promise<boolean>
  const rulePrivateRoute: IRulePrivateRoute = async userFire =>
    (isCurrentPathPrivate(routes) && !userFire) && await router.push(routes.home.path)

  type IRuleUserOn = (userFire: UserAuth | null) => Promise<unknown>
  const ruleUserOn: IRuleUserOn = async userFire =>
    !(loadIsFalse() || !(userIsntDefined() && userFire)) && defineUser(userFire)

  type IRuleUserOff = (userFire: UserAuth | null) => Promise<unknown>
  const ruleUserOff: IRuleUserOff = async userFire =>
    (!(loadIsFalse() || userFire) && await defineNoUser())

  useEffect(() => {
    const runRulles = authState(async (userAuth) => {
      await rulePrivateRoute(userAuth)
      await ruleUserOn(userAuth)
      await ruleUserOff(userAuth)
    })

    return runRulles
  }, [])

  return (
    <AuthUseContext.Provider data-testid="AuthProvider" value={{ user: user.data, signIn, signOut }}>
      <LoadingHOC data={user.load}>
        <ProtectRoute route={router.route} user={user.data}>{children}</ProtectRoute>
      </LoadingHOC>
    </AuthUseContext.Provider >
  )
}

export { Auth }
