import { useState } from 'react'
import { getFormattedGameTime } from '../utils'

interface IUsePlay {
  play: boolean
  getGameTime: () => string
  onPlay: () => void
  restartTime: () => void
  resetGame: () => void
}

const usePlay = (): IUsePlay => {
  const [play, setPlay] = useState(false)
  const [startTime, setStartTime] = useState(new Date())

  return {
    play,
    getGameTime: () => getFormattedGameTime(startTime),
    onPlay: () => {
      setPlay(true)
      setStartTime(new Date())
    },
    restartTime: () => {
      setStartTime(new Date())
    },
    resetGame: () => {
      setPlay(false)
    }
  }
}

export default usePlay
