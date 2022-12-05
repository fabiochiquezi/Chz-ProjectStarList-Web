import { useRouter } from 'next/router'
import { LoadContext as Load } from './Load'

export const LoadContext = Load(useRouter)
