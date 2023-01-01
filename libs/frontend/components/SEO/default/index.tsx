import { FC } from 'react'
import Head from 'next/head'

type ISEO = FC<{
  title: string
  description?: string
}>

export const SEO: ISEO = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    {description && <meta
      name="description"
      content={description}
    />}
  </Head>
)
