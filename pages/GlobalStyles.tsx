// styles/GlobalStyles.tsx
import React, { ReactElement } from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`
  }
})

const GlobalStyles = (): ReactElement => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
