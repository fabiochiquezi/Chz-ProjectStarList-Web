import { useRouter } from 'next/router'
import { Header as HeaderExtend } from '.'
import { useAuth } from '../../../../contexts'

const Header = HeaderExtend(useRouter)(useAuth)

export { Header }
