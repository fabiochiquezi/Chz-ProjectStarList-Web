export function getTitle(query: string): Record<string, any> {
  switch (query) {
    case 'doing':
      return {
        title: 'ALL WORKS YOU ARE DOING',
        description: 'Dude, you got to finish this, keep going'
      }
    case 'illdo':
      return {
        title: 'YOU GOT TO START BRUH',
        description: 'The greatest works on your OneDayIWill'
      }
    case 'done':
      return {
        title: 'THIS IS ALL MY JOURNEY',
        description: 'Yeah pal, I finish all of them'
      }
    default:
      return {
        title: 'GREAT WORKS',
        description: 'Exciting, emotional and unexpected'
      }
  }
}
