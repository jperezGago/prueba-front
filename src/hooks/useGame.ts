import { useState, useEffect } from 'react'
import { type ICardInfo } from '../types'
import { getInitialCardsInfo } from '../utils/cardsInfo'
import { getCardsInfoFromStorage, saveCardsInfoToStorage } from '../utils/storage'

interface IUseGame {
  cardsInfo: ICardInfo[]
  onBackCardPress: (id: number) => void
  resetCardsInfo: () => void
}

const useGame = (): IUseGame => {
  const initialCardsInfo = getInitialCardsInfo()
  const [cardsInfo, setCardsInfo] = useState(() => getCardsInfoFromStorage(initialCardsInfo))

  const setCardsInfoAndStorage = (cardsInfo: ICardInfo[]): void => {
    setCardsInfo(cardsInfo)
    saveCardsInfoToStorage(cardsInfo)
  }

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

    const notMatchedflippedCardsInfo = cardsInfo.filter(cardInfo => cardInfo.isVisible && !cardInfo.matched)

    // Si no hay 2 cartas giradas:
    if (notMatchedflippedCardsInfo.length !== 2) return // salimos sin hacer nada

    // Si hay 2 cartas giradas:
    const [card1, card2] = notMatchedflippedCardsInfo

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

  const updateCardsInfo = (id: number): void => {
    const updatedCardsInfo = cardsInfo.map(cardInfo => {
      return cardInfo.id === id ? { ...cardInfo, isVisible: true } : cardInfo
    })

    setCardsInfoAndStorage(updatedCardsInfo)
  }

  const onBackCardPress = (id: number): void => {
    const notMatchedflippedCards = cardsInfo.filter(cardInfo => cardInfo.isVisible && !cardInfo.matched)

    if (notMatchedflippedCards.length >= 2) return

    updateCardsInfo(id)
  }

  const resetCardsInfo = (): void => {
    const initialCardsInfo = getInitialCardsInfo()

    setCardsInfoAndStorage(initialCardsInfo)
  }

  return {
    cardsInfo,
    onBackCardPress,
    resetCardsInfo
  }
}

export default useGame
