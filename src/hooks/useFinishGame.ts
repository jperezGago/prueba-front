import { useEffect, useState } from 'react'
import throwConfetti from 'canvas-confetti'
import { type ICardInfo } from '../types'
import {
  getRecordTimeFromStorage,
  removeCardsInfoFromStorage,
  removeStartTimeFromStorage,
  saveRecordTimeToStorage
} from '../utils/storage'
import { getTimeDifferenceUntilNow } from '../utils'

interface IUseFinishModalParams {
  cardsInfo: ICardInfo[]
  startTime: Date
  resetCardsInfo: () => void
  restartTime: () => void
  resetPlay: () => void
}

interface IUseFinishModal {
  isGameFinished: boolean
  isRecordTime: boolean
  gameTime: number
  restartGame: () => void
  resetGame: () => void
}

const useFinishGame = ({
  cardsInfo,
  startTime,
  resetCardsInfo,
  restartTime,
  resetPlay
}: IUseFinishModalParams): IUseFinishModal => {
  const [isGameFinished, setGameFinished] = useState(false)
  const [gameTime, setTimeGame] = useState(0)
  const [isRecordTime, setRecordTime] = useState(false)

  useEffect(() => {
    const areEveryCardsFlipped = cardsInfo.every(({ matched }) => !!matched)

    if (!areEveryCardsFlipped) return

    // Juego terminado:
    const lastGameTime = getTimeDifferenceUntilNow(startTime)

    throwConfetti()
    setGameFinished(true)
    setTimeGame(lastGameTime)

    const recordTime = getRecordTimeFromStorage()

    if (recordTime === null || lastGameTime < recordTime) {
      setRecordTime(true)
      saveRecordTimeToStorage(lastGameTime)
    }
  }, [cardsInfo, startTime])

  return {
    isGameFinished,
    gameTime,
    isRecordTime,
    restartGame: () => {
      restartTime()
      resetCardsInfo()
      setGameFinished(false)
      setRecordTime(false)
      setTimeGame(0)
    },
    resetGame: () => {
      resetPlay()
      removeCardsInfoFromStorage()
      removeStartTimeFromStorage()
    }
  }
}

export default useFinishGame
