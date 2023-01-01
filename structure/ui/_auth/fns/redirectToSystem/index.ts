import Router from 'next/router'
import { User } from 'firebase/auth'
import { routes } from 'src/pages/routes'
import { isCurrentPathPublic } from 'libs/helpers/front/path'
import { getUserNameFromEmail } from '../../../../events/_utils/getUserName'

type IredirectToSystem = (userFirebase: User) => Promise<boolean>

export const redirectToSystem: IredirectToSystem = async user =>
  isCurrentPathPublic(routes) && await Router.push(`/${getUserNameFromEmail(String(user.email))}`)
