import { FC, ReactNode } from 'react'
import { Structure } from './structure'
import { Auth } from './auth'

const Struct: FC<{ children: ReactNode }> = ({ children }) => (
  <Auth>
    <Structure>
      {children}
    </Structure>
  </Auth>
)


export { Struct }
