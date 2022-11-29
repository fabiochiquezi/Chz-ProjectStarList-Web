type ICloseFn = () => void

type IOpenFn = (
  mode: 'red' | 'green',
  message: string,
  delay?: number,
  closeIcon?: {
    width: number
    height: number
  }
) => void

export type IUsePortalAlert = (outsideId?: string) => {
  open: IOpenFn
  close: ICloseFn
}

const usePortalAlert: IUsePortalAlert = outsideId => {
  const close: ICloseFn = () => {
    const elem = document.getElementById('AlertPortal')
    if (!elem) return
    const parent = elem?.parentNode
    if (parent) parent.removeChild(elem)
  }

  const open: IOpenFn = (mode, message, delay, closeIcon) => {
    const alreadyBuild = document.getElementById('AlertPortal')
    if (alreadyBuild) return

    const modeClass = { red: '#dc2626', green: '#16a34a' }
    const background = modeClass[mode]

    const div = document.createElement('div')

    div.classList.add('Alert')
    if (outsideId) div.classList.add(`${outsideId}`)
    div.setAttribute('id', 'AlertPortal')
    div.addEventListener('click', close)

    div.innerHTML = `
        <div style="background-color: ${background}">
            <p class="text-lg text-white mr-2 ml-2">${message}</p>
            <div class="close">
            <svg
                width="20"
                height=${closeIcon?.height ?? 16}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <line
                    x1="1.6862"
                    y1=${closeIcon?.width ?? 22}
                    x2=${closeIcon?.width ?? 2}
                    y2="1.68632"
                    stroke={strokeColor}
                    strokeWidth={stroke}
                />
                <path
                    d="M1.99341 1.59338C10.2777 9.87765 14.9223 14.5223 23.2066 22.8066"
                    stroke={strokeColor}
                    strokeWidth={stroke}
                />
            </svg>
            </div>
        </div>
    `

    document.body.appendChild(div)
    if (delay) setTimeout(() => close(), delay)
  }

  return { open, close }
}

export { usePortalAlert }
