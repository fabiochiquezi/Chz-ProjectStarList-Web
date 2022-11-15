export function getTitle(query: string): Record<string, any> {
    switch (query) {
        case 'doing':
            return {
                title: 'ALL WORKS YOU ARE DOING',
                subtitle: 'Dude, you got to finish this, keep going'
            }
        case 'illdo':
            return {
                title: 'YOU GOT TO START BRUH',
                subtitle: 'The greatest works on your OneDayIWill'
            }
        case 'did':
            return {
                title: 'THIS IS ALL MY JOURNEY',
                subtitle: 'Yeah pal, I finish all of them'
            }
        default:
            return {
                title: 'GREAT WORKS',
                subtitle: 'Exciting, emotional and unexpected'
            }
    }
}
