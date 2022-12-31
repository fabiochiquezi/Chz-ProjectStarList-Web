interface Spin { color: string, width: number, height: number }

type ICloseFn = () => void
type IOpenFn = (message?: string | null, delay?: number | null, spin?: Spin) => void
export type IUsePopSave = (outsideId?: string) => { open: IOpenFn, close: ICloseFn }

const usePopSave: IUsePopSave = outsideId => {
  const options = { classRemoveAnim: 'popSave-anim-out', duration: 300 }
  const ID = 'PopSavePortal'

  const getHTML = (message?: string | null, spin?: Spin): string => `
    <div
        class="portals-popsave-spinner"
        data-testid="PopSaveSpin"
        style="
          width:${spin ? String(spin.width) : '32'}px;
          height:${spin ? String(spin.height) : '32'}px;
        "
    >
      <div style="
        width:16px;height:16px;
        border:2px solid ${spin ? spin.color : '#FB923C'};
        border-color: ${spin ? spin.color : '#FB923C'} transparent
        transparent transparent"
      >
      </div>
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
        transparent transparent">
      </div>
      <div style="
        width:16px;
        height:16px;
        border:2px solid ${spin ? spin.color : '#FB923C'};
        border-color:${spin ? spin.color : '#FB923C'} transparent
        transparent transparent">
      </div>
    </div>
    <p><span>${message ?? 'Saving...Don&lsquo;t close!'}</span></p>
  `

  const close: ICloseFn = () => {
    const elem = document.getElementById(ID)
    if (!elem) return
    elem.classList.add(options.classRemoveAnim)
    setTimeout(() => {
      const parent = elem?.parentNode
      if (parent) parent.removeChild(elem)
    }, options.duration)
  }

  const open: IOpenFn = (message, delay, spin) => {
    const alreadyBuild = document.getElementById(ID)
    if (alreadyBuild) return
    const div = document.createElement('div')
    div.classList.add('popSave')
    if (outsideId) div.classList.add(outsideId)
    div.setAttribute('id', ID)
    div.setAttribute('data-testid', 'PopSave')
    div.innerHTML = getHTML(message, spin)
    document.body.appendChild(div)
    if (delay) setTimeout(() => close(), delay)
  }

  return { open, close }
}

export { usePopSave }
