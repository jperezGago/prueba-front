import { useState } from 'react'
import { type ICard } from '../types'
import SHUFFLED_EMOJI_LIST from '../utils/emojis'

const useGame = (): [cardsInfo: ICard[]] => {
  const initalCardsInfo = SHUFFLED_EMOJI_LIST.map((emoji, index) => ({
    id: index + 1,
    emoji,
    visible: false
  }))
  const [cardsInfo] = useState(initalCardsInfo)

  return [cardsInfo]
}

export default useGame
