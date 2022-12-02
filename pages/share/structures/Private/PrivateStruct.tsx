import { useAuth } from '../../contexts'
import { useRouter } from 'next/router'
import { GetStruct } from '.'

export const PrivateStruct = GetStruct(useRouter)(useAuth)

