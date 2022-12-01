import { screen } from '@testing-library/react'
import { usePopSave } from '.'

describe('usePortalPopSave', () => {
  const { open, close } = usePopSave()

  afterEach(() => {
    const Pop = screen.queryByTestId('PopSave')
    if (Pop) close()
  })

  it('open', () => {
    open()
    const pop = screen.getByTestId('PopSave')
    const spin = screen.getByTestId('PopSaveSpin')
    expect(pop.textContent?.trim()).toBe('Saving...Don‘t close!')
    expect(spin).toHaveStyle('width: 32px; height: 32px;')
    const divsLoad = spin.querySelectorAll('div')
    divsLoad.forEach(div => {
      expect(div).toHaveStyle(`border: 2px solid #FB923C; border-color: #FB923C transparent
      transparent transparent`)
    })
  })

  it('open w/ message', () => {
    open('open')
    const pop = screen.getByTestId('PopSave')
    expect(pop.textContent?.trim()).toBe('open')
  })

  it('open w/ spin', () => {
    open('open', null, { color: '#ddd', width: 10, height: 10 })
    const spin = screen.getByTestId('PopSaveSpin')
    expect(spin).toHaveStyle('width: 10px; height: 10px;')
    const divsLoad = spin.querySelectorAll('div')
    divsLoad.forEach(div => {
      expect(div).toHaveStyle(`border: 2px solid #ddd; border-color: #ddd transparent
      transparent transparent`)
    })
  })

  it('close', () => {
    open()
    const pop = screen.getByTestId('PopSave')
    expect(pop).toBeInTheDocument()
    close()
    expect(pop).not.toBeInTheDocument()
    expect.assertions(2)
  })

  it('classID from outside', () => {
    const pop = usePopSave('test')
    pop.open()
    const PopSave = screen.getByTestId('PopSave')
    expect(PopSave).toHaveClass('test')
  })

  it('shoudnt add two times', () => {
    open()
    open()
    const Pop = screen.getAllByTestId('PopSave')
    expect(Pop).toHaveLength(1)
  })
})
