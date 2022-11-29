interface Spin {
  color: string
  width: number
  height: number
}
type ICloseFn = () => void
type IOpenFn = (message?: string, delay?: number, spin?: Spin) => void
type IUsePortalPopSave = (outsideId?: string) => {
  open: IOpenFn
  close: ICloseFn
}

const usePortalPopSave: IUsePortalPopSave = outsideId => {
  const ID = 'PopSavePortal'

  const getHTML = (message?: string, spin?: Spin): string => `
        <div
            class="spinnerDefault"
            style="
                width:${spin ? String(spin.width) : '32'}px;
                height:${spin ? String(spin.height) : '32'}px"
        >
            <div style="
                width:16px;height:16px;
                border:2px solid ${spin ? spin.color : '#FB923C'};
                border-color: ${spin ? spin.color : '#FB923C'} transparent
                transparent transparent"
            ></div>
            <div style="
                width:16px;
                height:16px;
                border:2px solid ${spin ? spin.color : '#FB923C'};
                border-color:${spin ? spin.color : '#FB923C'} transparent
                transparent transparent">
            </div>
            <div style="
                width:16px;
                height:16px;
                border:2px solid ${spin ? spin.color : '#FB923C'};
                border-color:${spin ? spin.color : '#FB923C'} transparent
                transparent transparent"></div>
            <div style="
                width:16px;
                height:16px;
                border:2px solid ${spin ? spin.color : '#FB923C'};
                border-color:${spin ? spin.color : '#FB923C'} transparent
                transparent transparent"></div>
        </div>
        <p><span>${message ?? 'Saving...Don&lsquo;t close!'}</span></p>
    `

  const close: ICloseFn = () => {
    const elem = document.getElementById(ID)
    if (!elem) return
    const parent = elem?.parentNode
    if (parent) parent.removeChild(elem)
  }

  const open: IOpenFn = (message, delay, spin) => {
    const alreadyBuild = document.getElementById(ID)
    if (alreadyBuild) return

    const div = document.createElement('div')
    div.classList.add('popSave')
    if (outsideId) div.classList.add(outsideId)
    div.setAttribute('id', ID)
    div.innerHTML = getHTML(message, spin)
    document.body.appendChild(div)
    if (delay) setTimeout(() => close(), delay)
  }

  return { open, close }
}

export { usePortalPopSave }
