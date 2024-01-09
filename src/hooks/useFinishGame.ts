import { useEffect, useState } from 'react'
import { type ICardInfo } from '../types'
import { resetStorage } from '../utils/storage'

interface IUseFinishModalParams {
  cardsInfo: ICardInfo[]
  resetCardsInfo: () => void
  restartTime: () => void
  resetGame: () => void
}

interface IUseFinishModal {
  isGameFinished: boolean
  onFinishPressed: () => void
  onClosePressed: () => void
}

const useFinishGame = ({
  cardsInfo,
  resetCardsInfo,
  restartTime,
  resetGame
}: IUseFinishModalParams): IUseFinishModal => {
  const [isGameFinished, setGameFinished] = useState(false)

  useEffect(() => {
    const areEveryCardsFlipped = cardsInfo.every(({ matched }) => !!matched)

    if (areEveryCardsFlipped) setGameFinished(true)
  }, [cardsInfo])

  return {
    isGameFinished,
    onFinishPressed: () => {
      restartTime()
      resetCardsInfo()
      resetStorage()
      setGameFinished(false)
    },
    onClosePressed: () => {
      resetGame()
      resetStorage()
      setGameFinished(false)
    }
  }
}

export default useFinishGame
