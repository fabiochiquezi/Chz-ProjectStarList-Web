import { RefObject } from 'react'

function keyDownBtnTrigger(btnRef: RefObject<HTMLButtonElement>): void {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && btnRef.current != null) {
            event.preventDefault()
            btnRef.current.click()
        }
    })
}

export { keyDownBtnTrigger }
