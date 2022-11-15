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

interface GetUserInfo {
    name: string
    time: number
}

function getUserInfo(): { name: string; time: number } {
    return { name: 'fabio', time: 29 }
}

type UserInfo = ReturnType<typeof getUserInfo>

interface Rocket {
    [property: string]: string
}
const rocket: Rocket = {
    name: 'Falcon 9',
    variant: 'v1.0',
    thrust: '4,940 kN'
}

const test = (arr: readonly { name: string; age: number }): void => {
    arr.pop()
}
