type ICloseFn = () => void

type IOpenFn = (
  message?: string,
  delay?: number,
  spin?: { color: string; width: number; height: number }
) => void

type IUsePortalPopSave = (outsideId?: string) => {
  open: (
    message?: string,
    delay?: number,
    spin?: { color: string; width: number; height: number }
  ) => void
  close: () => void
}

const usePortalPopSave: IUsePortalPopSave = outsideId => {
  const close: ICloseFn = () => {
    const elem = document.getElementById('PopSavePortal')
    if (!elem) return
    const parent = elem?.parentNode
    if (parent) parent.removeChild(elem)
  }

  const open: IOpenFn = (message, delay, spin) => {
    const alreadyBuild = document.getElementById('PopSavePortal')
    if (alreadyBuild) return

    const text = message ?? 'Saving...Don&lsquo;t close!'
    const div = document.createElement('div')

    div.classList.add('popSave')
    if (outsideId) div.classList.add(outsideId)
    div.setAttribute('id', 'PopSavePortal')

    div.innerHTML = `
        <div
            class="SpineIcon_ldsRing__6e1z5 "
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
        <p><span>${text}</span></p>
    `

    document.body.appendChild(div)
    if (delay) setTimeout(() => close(), delay)
  }

  return { open, close }
}

export { usePortalPopSave }
