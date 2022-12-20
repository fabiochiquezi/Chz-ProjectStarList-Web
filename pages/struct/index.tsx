import { FC, ReactNode } from 'react'
import { Structure } from './structure'
import { AuthFirebase } from './auth/extended'

const Struct: FC<{ children: ReactNode }> = ({ children }) => (
  <AuthFirebase>
    <Structure>
      {children}
    </Structure>
  </AuthFirebase>
)


export { Struct }
