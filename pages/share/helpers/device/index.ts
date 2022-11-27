interface Window {
  matchMedia: any
  matches: any
}

enum deviceEnum {
  mobile = 1,
  tablet,
  desktop
}

const defineDevice = (device: Window): number => {
  const mediaQuery = (width: string): any => device.matchMedia(width).matches
  const mobile = '(max-width: 640px)'
  const tablet = '(min-width: 641px) and (max-width: 1024px)'
  const desktop = '(min-width: 1025px)'

  if (mediaQuery(mobile)) return deviceEnum.mobile
  if (mediaQuery(tablet)) return deviceEnum.tablet
  if (mediaQuery(desktop)) return deviceEnum.desktop
  return 0
}

const isMobile = (device: any): boolean =>
  defineDevice(device) === deviceEnum.mobile
const isTablet = (device: any): boolean =>
  defineDevice(device) === deviceEnum.tablet
const isDesktop = (device: any): boolean =>
  defineDevice(device) === deviceEnum.desktop

export { isMobile, isTablet, isDesktop }
