import Router from 'next/router'
import { User } from 'firebase/auth'
import { routes } from '../../../../../appShare/settings/routes'
import { isCurrentPathPublic } from '../../../../../libs/frontend/fns'
import { getUserNameFromEmail } from '../../../../events/_utils/getUserName'

type IredirectToSystem = (userFirebase: User) => Promise<boolean>

export const redirectToSystem: IredirectToSystem = async user =>
  isCurrentPathPublic(routes) && await Router.push(`/${getUserNameFromEmail(String(user.email))}`)

// export const redirectToSystem2 = isCurrentPathPublic => push => async getUserName =>
  // isCurrentPathPublic && await push(`/${getUserName}`)
