import { useState } from 'react'
import {
  getPlayFromStorage,
  getStartTimeFromStorage,
  savePlayToStorage,
  saveStartTimeToStorage
} from '../utils/storage'

interface IUsePlay {
  play: boolean
  startTime: Date
  startGame: () => void
  restartTime: () => void
  resetPlay: () => void
}

const usePlay = (): IUsePlay => {
  const [play, setPlay] = useState(() => getPlayFromStorage(false))
  const [startTime, setStartTime] = useState(() => getStartTimeFromStorage(new Date()))

  const setPlayAndStorage = (play: boolean): void => {
    setPlay(play)
    savePlayToStorage(play)
  }

  const setStartTimeAndStorage = (startTime: Date): void => {
    setStartTime(startTime)
    saveStartTimeToStorage(startTime)
  }

  return {
    play,
    startTime,
    startGame: () => {
      setPlayAndStorage(true)
      setStartTimeAndStorage(new Date())
    },
    restartTime: () => {
      setStartTimeAndStorage(new Date())
    },
    resetPlay: () => {
      setPlayAndStorage(false)
    }
  }
}

export default usePlay
