import { render, screen } from '@testing-library/react'
import { ProtectRoute } from '.'
import React from 'react'


describe('PrivateRoute', () => {
  test('public', () => {
    const props: any = { isPublic: true, user: { name: 'user' } }
    render(<ProtectRoute {...props}><p>test</p></ProtectRoute>)
    const el = screen.getByTestId('ProtectRoute')
    const p = screen.getByText('test')
    const loading = screen.queryByTestId('Loading')
    expect(el).toBeInTheDocument()
    expect(p).toBeInTheDocument()
    expect(loading).not.toBeInTheDocument()
  })


  test('private w/ no user', () => {
    const props: any = { isPublic: false, user: null }
    render(<ProtectRoute {...props}><p>test</p></ProtectRoute>)
    const el = screen.getByTestId('ProtectRoute')
    const p = screen.queryByTestId('test')
    const loading = screen.getByTestId('Loading')
    expect(el).toBeInTheDocument()
    expect(p).not.toBeInTheDocument()
    expect(loading).toBeInTheDocument()
  })

  test('private w/ user', () => {
    const props: any = { isPublic: false, user: true }
    render(<ProtectRoute {...props}><p>test</p></ProtectRoute>)
    const el = screen.getByTestId('ProtectRoute')
    const p = screen.getByText('test')
    const loading = screen.queryByTestId('Loading')
    expect(el).toBeInTheDocument()
    expect(p).toBeInTheDocument()
    expect(loading).not.toBeInTheDocument()
  })
})
