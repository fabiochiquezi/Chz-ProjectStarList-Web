import { pipe, asyncPipe } from './index'

describe('pipe', () => {
  it('pipe', () => {
    const sum2 = (a: number): number => a + 2
    const sum4 = (a: number): number => a + 4
    const sum8 = (a: number): number => a + 8
    expect(pipe(sum2, sum4, sum8)(0)).toBe(14)
  })

  it('asyncPipe', async () => {
    const addA = async (str: string): Promise<string> =>
      await new Promise(resolve => resolve(`A${str}`))
    const addB = async (str: string): Promise<string> =>
      await new Promise(resolve => resolve(`B${str}`))
    const addC = async (str: string): Promise<string> =>
      await new Promise(resolve => resolve(`C${str}`))

    const result = await asyncPipe(addA, addB, addC)('-')
    expect(result).toBe('CBA-')
  })
})
