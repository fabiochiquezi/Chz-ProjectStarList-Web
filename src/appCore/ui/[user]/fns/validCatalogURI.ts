import Router from 'next/router'

export function validCatalogURI(catalogURI: string): void {
  const catalogTypes = ['doing', 'did', 'illdo']
  const isCatalogTypes = catalogTypes.includes(catalogURI)
  if (!isCatalogTypes) Router.push('404')
}
