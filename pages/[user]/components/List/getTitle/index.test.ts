import { getTitle } from './index'

describe('general/fucntions/getTitle', () => {
  test('should return doing state', () => {
    const obj = getTitle('doing')
    expect(obj.title).toBe('ALL WORKS YOU ARE DOING')
    expect(obj.subtitle).toBe('Dude, you got to finish this, keep going')
  })

  test('should return illdo state', () => {
    const obj = getTitle('illdo')
    expect(obj.title).toBe('YOU GOT TO START BRUH')
    expect(obj.subtitle).toBe('The greatest works on your OneDayIWill')
  })

  test('should return done state', () => {
    const obj = getTitle('done')
    expect(obj.title).toBe('THIS IS ALL MY JOURNEY')
    expect(obj.subtitle).toBe('Yeah pal, I finish all of them')
  })

  test('should return default state', () => {
    const obj = getTitle('default')
    expect(obj.title).toBe('GREAT WORKS')
    expect(obj.subtitle).toBe('Exciting, emotional and unexpected')
  })
})
