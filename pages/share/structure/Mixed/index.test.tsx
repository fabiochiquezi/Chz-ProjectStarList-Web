import { render } from '@testing-library/react'
import { MixedStruct } from '.'

describe('MixedStructure', () => {
    const props: any = {
        router: { route: '/', push: jest.fn((s: string) => s) },
        user: { displayName: 'tester' },
        signOut: jest.fn(),
        loading: true,
        BtnSignIn: <button>BtnSignIn</button>
    }
    const children = <p>children</p>
    it('public struct', () => {
        render(<MixedStruct {...props}>{children}</MixedStruct>)
    })
})
