import { useState, useEffect } from 'react'
import { type ICardInfo, type OnBackCardPressType } from '../types'
import EMOJI_LIST from '../utils/emojis'
import { getShuffledArray } from '../utils'

interface IUseGame {
  cardsInfo: ICardInfo[]
  onBackCardPress: OnBackCardPressType
  resetCardsInfo: () => void
}

const getShuffleCardsInfo = (): ICardInfo[] => {
  const suffledEmojiList = getShuffledArray(EMOJI_LIST)
  const initalCardsInfo: ICardInfo[] = suffledEmojiList.map((emoji, index) => ({
    id: index + 1,
    emoji,
    isVisible: false,
    matched: false
  }))

  return initalCardsInfo
}

const useGame = (): IUseGame => {
  const shuffledCardsInfo = getShuffleCardsInfo()
  const [cardsInfo, setCardsInfo] = useState(shuffledCardsInfo)

  useEffect(() => {
    const unflipUnmatchedCardsInfo = (): void => {
      const unmatchedCardsInfo = cardsInfo.map(cardInfo => {
        return !cardInfo.matched ? { ...cardInfo, isVisible: false } : cardInfo
      })

      setCardsInfo(unmatchedCardsInfo)
    }

    const updateMatchedCardsInfo = (): void => {
      const updatedCardsInfo = cardsInfo.map(cardInfo => {
        return (cardInfo.isVisible && !cardInfo.matched) ? { ...cardInfo, matched: true } : cardInfo
      })

      setCardsInfo(updatedCardsInfo)
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

    setCardsInfo(updatedCardsInfo)
  }

  const onBackCardPress: OnBackCardPressType = (id: number) => {
    const notMatchedflippedCards = cardsInfo.filter(cardInfo => cardInfo.isVisible && !cardInfo.matched)

    if (notMatchedflippedCards.length >= 2) return

    updateCardsInfo(id)
  }

  const resetCardsInfo = (): void => {
    const shuffledCardsInfo = getShuffleCardsInfo()

    setCardsInfo(shuffledCardsInfo)
  }

  return {
    cardsInfo,
    onBackCardPress,
    resetCardsInfo
  }
}

export default useGame
