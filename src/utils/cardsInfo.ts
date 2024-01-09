import EMOJI_LIST from './emojis'
import { getShuffledArray } from '.'
import { type ICardInfo } from '../types'

export const getInitialCardsInfo = (): ICardInfo[] => {
  const suffledEmojiList = getShuffledArray(EMOJI_LIST)

  return suffledEmojiList.map((emoji, index) => ({
    id: index + 1,
    emoji,
    isVisible: false,
    matched: false
  }))
}
