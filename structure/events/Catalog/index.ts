import { setEmptyCatalog } from './setEmptyCatalog'
import { IsetEmptyCatalog } from './useCases'

interface ICatalogFirebase { setEmptyCatalog: IsetEmptyCatalog; }
export const CatalogFirebase: ICatalogFirebase = ({ setEmptyCatalog })
