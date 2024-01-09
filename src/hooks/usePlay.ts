import { useState } from 'react'
import { getFormattedGameTime } from '../utils'
import { getPlayFromStorage, savePlayToStorage } from '../utils/storage'

interface IUsePlay {
  play: boolean
  getGameTime: () => string
  onPlay: () => void
  restartTime: () => void
  resetGame: () => void
}

const usePlay = (): IUsePlay => {
  const [play, setPlay] = useState(() => getPlayFromStorage(false))
  const [startTime, setStartTime] = useState(new Date())

  const setPlayAndStorage = (play: boolean): void => {
    setPlay(play)
    savePlayToStorage(play)
  }

  return {
    play,
    getGameTime: () => getFormattedGameTime(startTime),
    onPlay: () => {
      setPlayAndStorage(true)
      setStartTime(new Date())
    },
    restartTime: () => {
      setStartTime(new Date())
    },
    resetGame: () => {
      setPlayAndStorage(false)
    }
  }
}

export default usePlay
