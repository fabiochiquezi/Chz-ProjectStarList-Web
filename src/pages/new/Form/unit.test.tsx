import { render, screen } from '@testing-library/react'
import { FormAddFields } from './Form'

describe('FormAddFields', () => {
  const formik: any = {
    handleChange: jest.fn(),
    errors: { catalogType: 'error' },
    values: { catalogType: 'doing' }
  }
  const BtnSubmit: any = () => <button data-testid="BtnSubmitTest">btn submit</button>

  test('elements', () => {
    render(<FormAddFields formik={formik} BtnSubmit={BtnSubmit} />)
    const el = screen.getByTestId('FormAddFields')
    const BtnSubmitTest = screen.getByTestId('BtnSubmitTest')
    const select = el.querySelector('select')

    expect(el).toBeInTheDocument()
    expect(BtnSubmitTest).toBeInTheDocument()
    expect(select?.value).toBe('doing')
  })
})
