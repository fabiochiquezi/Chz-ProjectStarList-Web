import Router from 'next/router'
import { User } from 'firebase/auth'
import { isCurrentPathPublic } from 'src/pages/routes'
import { getUserNameFromEmail } from '../../../../events/_utils/getUserName'

type IredirectToSystem = (userFirebase: User) => Promise<boolean>

export const redirectToSystem: IredirectToSystem = async user =>
  isCurrentPathPublic() && await Router.push(`/${getUserNameFromEmail(String(user.email))}`)
