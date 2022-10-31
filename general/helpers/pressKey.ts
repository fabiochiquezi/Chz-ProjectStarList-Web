function callPressKey(key: string, callBack: any): void {
    document.addEventListener('keydown', function (event) {
        if (event.key === key) {
            event.preventDefault()
            callBack()
        }
    })
}

function removePressKey(callBack: any): void {
    document.removeEventListener('keydown', callBack)
}

export { callPressKey, removePressKey }
