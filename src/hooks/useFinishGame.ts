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
  isModalVisible: boolean
  onFinishPressed: () => void
  onClosePressed: () => void
}

const useFinishGame = ({
  cardsInfo,
  resetCardsInfo,
  restartTime,
  resetGame
}: IUseFinishModalParams): IUseFinishModal => {
  const [isModalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    const areEveryCardsFlipped = cardsInfo.every(({ matched }) => !!matched)

    if (areEveryCardsFlipped) setModalVisible(true)
  }, [cardsInfo])

  return {
    isModalVisible,
    onFinishPressed: () => {
      restartTime()
      resetCardsInfo()
      resetStorage()
      setModalVisible(false)
    },
    onClosePressed: () => {
      resetGame()
      resetStorage()
      setModalVisible(false)
    }
  }
}

export default useFinishGame
