import { render, screen } from '@testing-library/react'
import { ReactElement } from 'react'
import { ProtectRoute } from '.'

describe('PrivateRoute', () => {
  const props: any = { isPublic: false, user: { name: 'user' } }
  const Elem = (): ReactElement => <ProtectRoute {...props}><p>test</p></ProtectRoute>

  it('should have children', () => {
    render(<Elem />)
    const el = screen.getByTestId('ProtectRoute')
    const loading = screen.getByTestId('Loading')
    expect(el).toBeInTheDocument()
    expect(loading).toBeInTheDocument()
  })
})
