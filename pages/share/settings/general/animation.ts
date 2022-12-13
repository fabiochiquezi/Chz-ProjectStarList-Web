export const animStandardDuration = 250

export const waitAnimEnd = async (): Promise<void> => {
  await new Promise((resolve, reject) => { setTimeout(() => { resolve(true) }, animStandardDuration) })
}
