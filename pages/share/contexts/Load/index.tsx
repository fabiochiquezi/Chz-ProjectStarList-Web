import { useRouter } from 'next/router'
import { useAuth } from '../Auth/useAuth'
import { LoadContext as Load } from './Load'

export const LoadContext = Load(useRouter)(useAuth)
