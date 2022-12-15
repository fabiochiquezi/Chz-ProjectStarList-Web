import { FC, ReactNode } from 'react'
import { Structure } from './struct'
import { AuthFirebase } from './auth/extended'

const Struct: FC<{ children: ReactNode }> = ({ children }) => (
  <AuthFirebase>
    <Structure>
      {children}
    </Structure>
  </AuthFirebase>
)


export { Struct }
