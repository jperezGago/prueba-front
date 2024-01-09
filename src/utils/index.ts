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

const getTimeDifferenceUntilNow = (startDate: Date): number => {
  const now = new Date()

  return (now.getTime() - startDate.getTime()) / 1000
}

const getFormattedHourFromTotalSeconds = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = Math.floor(totalSeconds % 60)

  if (minutes === 0) return `0:${seconds}`
  if (hours === 0) return `${minutes}:${seconds}`

  return `${hours}:${minutes}:${seconds}`
}

export const getFormattedGameTime = (startDate: Date): string => {
  const diffTimeUntilNow = getTimeDifferenceUntilNow(startDate)

  return getFormattedHourFromTotalSeconds(diffTimeUntilNow)
}
