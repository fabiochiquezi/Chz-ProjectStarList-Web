import { FC, ReactNode } from 'react'
import { Structure } from './_struct'
import { AuthFirebase } from './_auth/extended'

const Struct: FC<{ children: ReactNode }> = ({ children }) => (
  <AuthFirebase>
    <Structure>
      {children}
    </Structure>
  </AuthFirebase>
)


export { Struct }
