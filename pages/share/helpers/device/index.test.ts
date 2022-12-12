import { isDesktop, isMobile, isTablet } from '.'

describe('front/device', () => {
  const mobileMatch = '(max-width: 640px)'
  const tabletMatch = '(min-width: 641px) and (max-width: 1024px)'
  const desktopMatch = '(min-width: 1025px)'

  describe('if true', () => {
    test('isMobile', () => {
      const matchMedia = jest.fn(data => {
        if (data === mobileMatch) return { matches: true }
        return { matches: false }
      })
      const mock = { matchMedia }
      const mobile = isMobile(mock)

      expect(mobile).toBeTruthy()
      expect(mock.matchMedia).toBeCalledTimes(1)
      expect(mock.matchMedia).toBeCalledWith(mobileMatch)
      expect.assertions(3)
    })

    test('isTablet', () => {
      const matchMedia = jest.fn(data => {
        if (data === tabletMatch) return { matches: true }
        return { matches: false }
      })
      const mock = { matchMedia }
      const tablet = isTablet(mock)

      expect(tablet).toBeTruthy()
      expect(mock.matchMedia).toBeCalledTimes(2)
      expect(mock.matchMedia).toBeCalledWith(mobileMatch)
      expect(mock.matchMedia).toBeCalledWith(tabletMatch)
      expect.assertions(4)
    })

    test('isDesktop', () => {
      const matchMedia = jest.fn(data => {
        if (data === desktopMatch) return { matches: true }
        return { matches: false }
      })
      const mock = { matchMedia }
      const desktop = isDesktop(mock)

      expect(desktop).toBeTruthy()
      expect(mock.matchMedia).toBeCalledTimes(3)
      expect(mock.matchMedia).toBeCalledWith(mobileMatch)
      expect(mock.matchMedia).toBeCalledWith(tabletMatch)
      expect(mock.matchMedia).toBeCalledWith(desktopMatch)
      expect.assertions(5)
    })
  })

  describe('if false', () => {
    test('isMobile', () => {
      const matchMedia = jest.fn(data => {
        if (data === tabletMatch) return { matches: true }
        return { matches: false }
      })
      const mock = { matchMedia }
      const mobile = isMobile(mock)

      expect(mobile).toBeFalsy()
      expect(mock.matchMedia).toBeCalledTimes(2)
      expect(mock.matchMedia).toBeCalledWith(tabletMatch)
      expect.assertions(3)
    })

    test('isTablet', () => {
      const matchMedia = jest.fn(data => {
        if (data === desktopMatch) return { matches: true }
        return { matches: false }
      })
      const mock = { matchMedia }
      const tablet = isTablet(mock)

      expect(tablet).toBeFalsy()
      expect(mock.matchMedia).toBeCalledTimes(3)
      expect(mock.matchMedia).toBeCalledWith(desktopMatch)
      expect.assertions(3)
    })

    test('isDesktop', () => {
      const matchMedia = jest.fn(data => {
        if (data === mobileMatch) return { matches: true }
        return { matches: false }
      })
      const mock = { matchMedia }
      const desktop = isDesktop(mock)

      expect(desktop).toBeFalsy()
      expect(mock.matchMedia).toBeCalledTimes(1)
      expect(mock.matchMedia).toBeCalledWith(mobileMatch)
      expect.assertions(3)
    })
  })
})
