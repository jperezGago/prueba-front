export function getShuffledArray (array: string[]): string[] {
  const arrayCopy = [...array]
  let currentIndex = arrayCopy.length
  let randomIndex = arrayCopy.length

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;

    [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [arrayCopy[randomIndex], arrayCopy[currentIndex]]
  }

  return arrayCopy
}
