import { useState, useEffect } from 'react'
import { type ICardInfo } from '../types'
import { getInitialCardsInfo } from '../utils/cardsInfo'
import { getCardsInfoFromStorage, saveCardsInfoToStorage } from '../utils/storage'

interface IUseGame {
  cardsInfo: ICardInfo[]
  updateVisibilityCardsInfo: (id: number) => void
  resetCardsInfo: () => void
}

const useGame = (): IUseGame => {
  const initialCardsInfo = getInitialCardsInfo()
  const [cardsInfo, setCardsInfo] = useState(() => getCardsInfoFromStorage(initialCardsInfo))

  const setCardsInfoAndStorage = (cardsInfo: ICardInfo[]): void => {
    setCardsInfo(cardsInfo)
    saveCardsInfoToStorage(cardsInfo)
  }

  const getNotMatchedVisibleCards = (cardsInfo: ICardInfo[]): ICardInfo[] => (
    cardsInfo.filter(cardInfo => cardInfo.isVisible && !cardInfo.matched)
  )

  // Cada vez que se gira una carta
  useEffect(() => {
    const unflipUnmatchedCardsInfo = (): void => {
      const unmatchedCardsInfo = cardsInfo.map(cardInfo => {
        return !cardInfo.matched ? { ...cardInfo, isVisible: false } : cardInfo
      })

      setCardsInfoAndStorage(unmatchedCardsInfo)
    }

    const updateMatchedCardsInfo = (): void => {
      const updatedCardsInfo = cardsInfo.map(cardInfo => {
        return (cardInfo.isVisible && !cardInfo.matched) ? { ...cardInfo, matched: true } : cardInfo
      })

      setCardsInfoAndStorage(updatedCardsInfo)
    }

    const notMatchedVisibleCardsInfo = getNotMatchedVisibleCards(cardsInfo)

    // Si no hay 2 cartas giradas:
    if (notMatchedVisibleCardsInfo.length !== 2) return // salimos sin hacer nada

    // Si hay 2 cartas giradas:
    const [card1, card2] = notMatchedVisibleCardsInfo

    // Si las 2 cartas giradas son distintas:
    if (card1.emoji !== card2.emoji) {
      setTimeout(() => {
        unflipUnmatchedCardsInfo() // Las desgiramos después de 1 segundo
      }, 1000)

      return
    }

    // Si las 2 cartas giradas son iguales:
    updateMatchedCardsInfo() // Se setea el campo matched = true
  }, [cardsInfo])

  // Función ejecutada al pulsar una carta girada
  const updateVisibilityCardsInfo = (id: number): void => {
    const notMatchedVisibleCardsInfo = getNotMatchedVisibleCards(cardsInfo)

    // Si ya hay 2 cartas giradas:
    if (notMatchedVisibleCardsInfo.length >= 2) return

    // Si hay menos de 2 cartas giradas:
    const updatedVisibilityCardsInfo = cardsInfo.map(cardInfo => {
      return cardInfo.id === id ? { ...cardInfo, isVisible: true } : cardInfo
    })

    setCardsInfoAndStorage(updatedVisibilityCardsInfo)
  }

  const resetCardsInfo = (): void => {
    const initialCardsInfo = getInitialCardsInfo()

    setCardsInfoAndStorage(initialCardsInfo)
  }

  return {
    cardsInfo,
    updateVisibilityCardsInfo,
    resetCardsInfo
  }
}

export default useGame
