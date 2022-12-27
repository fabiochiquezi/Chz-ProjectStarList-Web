import { IsetEmptyCatalog, setEmptyCatalog } from './setEmptyCatalog'

type ICatalogFirebase = () => { setEmptyCatalog: IsetEmptyCatalog; }
export const CatalogFirebase: ICatalogFirebase = () => ({ setEmptyCatalog })
