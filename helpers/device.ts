type Window = { matchMedia: any; matches: any }

enum deviceEnum {
    mobile = 1,
    tablet,
    desktop
}

const defineDevice = (device: Window): number | void => {
    const mediaQuery = (width: string) => device.matchMedia(width).matches
    const mobile = '(max-width: 640px)'
    const tablet = '(min-width: 641px) and (max-width: 1024px)'
    const desktop = '(min-width: 1025px)'

    if (mediaQuery(mobile)) return deviceEnum.mobile
    if (mediaQuery(tablet)) return deviceEnum.tablet
    if (mediaQuery(desktop)) return deviceEnum.desktop
}

const isMobile = (device: any) => defineDevice(device) === deviceEnum.mobile
const isTablet = (device: any) => defineDevice(device) === deviceEnum.tablet
const isDesktop = (device: any) => defineDevice(device) === deviceEnum.desktop

export { isMobile, isTablet, isDesktop }
