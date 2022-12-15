type IOpenFn = (mode: 'error' | 'success', message: string, delay?: number) => void
type ISuccessFn = (message: string, delay?: number) => void
type IErrorFn = ISuccessFn
type ICloseFn = () => void

export type IUseAlert = (classID?: string) => {
  open: IOpenFn
  close: ICloseFn
  error: IErrorFn
  success: ISuccessFn
}

const useAlert: IUseAlert = classID => {
  const options = { classRemoveAnim: 'alert-anim-out', duration: 300 }
  const modeClass = { error: '#dc2626', success: '#16a34a' }
  const ID = 'AlertPortal'

  const getHTML = (message: string): string => `
    <p>${message}</p>
    <div class="close">
        <svg
            width="20"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line x1="1.6862" y1="22" x2="22" y2="1.68632" stroke="white" stroke-width="2"></line>
            <path d="M1.99341 1.59338C10.2777 9.87765 14.9223 14.5223 23.2066 22.8066" stroke="white" stroke-width="2"></path>
        </svg>
    </div>
  `

  const createElement = (): HTMLDivElement | undefined => {
    const alreadyBuild = document.getElementById(ID)
    if (alreadyBuild) return
    const div = document.createElement('div')
    div.classList.add('Alert')
    if (classID) div.classList.add(`${classID}`)
    div.setAttribute('id', ID)
    div.setAttribute('data-testid', 'Alert')
    div.addEventListener('click', close)
    return div
  }

  const close: ICloseFn = () => {
    const elem = document.getElementById(ID)
    if (!elem) return
    elem.classList.add(options.classRemoveAnim)
    setTimeout(() => {
      const parent = elem?.parentNode
      if (parent) parent.removeChild(elem)
    }, options.duration)
  }

  const open: IOpenFn = (mode, message, delay) => {
    const div = createElement()
    if (!div) return
    const background = modeClass[mode]
    div.style.backgroundColor = background
    div.innerHTML = getHTML(message)
    document.body.appendChild(div)
    if (delay) setTimeout(() => close(), delay)
  }

  const success: ISuccessFn = (message, delay) => {
    const div = createElement()
    if (!div) return
    div.style.backgroundColor = modeClass.success
    div.innerHTML = getHTML(message)
    document.body.appendChild(div)
    if (delay) setTimeout(() => close(), delay)
  }

  const error: IErrorFn = (message, delay) => {
    const div = createElement()
    if (!div) return
    div.style.backgroundColor = modeClass.error
    div.innerHTML = getHTML(message)
    document.body.appendChild(div)
    if (delay) setTimeout(() => close(), delay)
  }

  return { open, close, success, error }
}

export { useAlert }
