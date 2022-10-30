import { LoadingStruct } from 'components/Structure/Loadings/Default'
import { useUtils } from 'context/UtilsContext/types'
import React, { FC, ReactElement, ReactNode } from 'react'

interface props {
    children: ReactNode
}

const ContentWrapper: FC<props> = ({ children }) => {
    const { contentLoadState } = useUtils()

    const Load = <LoadingStruct />
    const cssMargin = 'pb-32 md:pb-28 pt-28 md:pt-32 lg:pt-36'
    const Content = <div className={cssMargin}>{children}</div>
    const Core = (): ReactElement => (contentLoadState ? Load : Content)
    return <Core />
}

export { ContentWrapper }
