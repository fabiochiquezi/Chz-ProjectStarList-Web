import { AuthFirebase } from '../../auth/AuthFirebase'
// import { useAlert, usePopSave } from '../../store'
// import { Alert, PopSave } from '../../components'
import { PrivateRoute } from './PrivateRoute'
import React, { FC, ReactNode } from 'react'

interface StructType {
    children: ReactNode
}

const StructApp: FC<StructType> = ({ children }) => {
    // const popSave = usePopSave()
    // const PopSaveEl = popSave.message && <PopSave message={popSave.message} />

    // const alert = useAlert()
    // const AlertEl = alert.message && (
    //     <Alert
    //         mode={alert.mode}
    //         message={alert.message}
    //         closeAlert={() => alert.close()}
    //     />
    // )
    return (
        <div>
            <AuthFirebase>
                <PrivateRoute>{children}</PrivateRoute>
            </AuthFirebase>
            {/* {AlertEl} */}
            {/* {PopSaveEl} */}
        </div>
    )
}

export { StructApp }
