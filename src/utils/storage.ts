import { type ICardInfo } from '../types'

export const saveCardsInfoToStorage = (cardsInfo: ICardInfo[]): void => {
  window.sessionStorage.setItem('cardsInfo', JSON.stringify(cardsInfo))
}

export const getCardsInfoFromStorage = (initialCardsInfo: ICardInfo[]): ICardInfo[] => {
  try {
    const data = window.sessionStorage.getItem('cardsInfo')
    return data !== null ? JSON.parse(data) : initialCardsInfo
  } catch (error) {
    return initialCardsInfo
  }
}

export const resetStorage = (): void => {
  window.sessionStorage.removeItem('cardsInfo')
  window.sessionStorage.removeItem('play')
}

export const savePlayToStorage = (play: boolean): void => {
  window.sessionStorage.setItem('play', play.toString())
}

export const getPlayFromStorage = (initialPlay: boolean): boolean => {
  try {
    const data = window.sessionStorage.getItem('play')
    return data !== null ? data === 'true' : initialPlay
  } catch (error) {
    return initialPlay
  }
}
