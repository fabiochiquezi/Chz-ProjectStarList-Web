// import axios from 'axios'
// import { catalogI } from 'types/catalog'

// async function getBooks(page: string): Promise<catalogI[]> {
//     const drafbit = 'https://example-data.draftbit.com/books'
//     const get = await axios.get(`${drafbit}?_page=${page}&_limit=20`)
//     const results = get.data
//     const cover = (item: any): catalogI => ({ ...item, thumb: item.image_url })
//     return results.map(cover)
// }

export {}
