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

export const removeCardsInfoFromStorage = (): void => {
  window.sessionStorage.removeItem('cardsInfo')
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

export const saveRecordTimeToStorage = (recordTime: number): void => {
  window.sessionStorage.setItem('recordTime', recordTime.toString())
}

export const getRecordTimeFromStorage = (): number | null => {
  try {
    const data = window.sessionStorage.getItem('recordTime')
    return data !== null ? Number(data) : null
  } catch (error) {
    return null
  }
}

export const saveStartTimeToStorage = (startTime: Date): void => {
  window.sessionStorage.setItem('startTime', startTime.toString())
}

export const getStartTimeFromStorage = (initialStartTime: Date): Date => {
  try {
    const data = window.sessionStorage.getItem('startTime')
    return data !== null ? new Date(data) : initialStartTime
  } catch (error) {
    return initialStartTime
  }
}

export const removeStartTimeFromStorage = (): void => {
  window.sessionStorage.removeItem('startTime')
}
