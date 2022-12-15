export const animStandardDuration = 250

export const waitAnimEnd = async (time?: number): Promise<void> => {
  await new Promise((resolve, reject) => { setTimeout(() => { resolve(true) }, time ?? animStandardDuration) })
}
