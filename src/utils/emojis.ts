import { getShuffledArray } from '.'
import {
  DisguisedFace,
  CowboyHatFace,
  FlushedFace,
  MoneyMouthFace,
  NerdFace,
  SmilingFaceWithHearts,
  SmilingFaceWithSunglasses,
  SmilingFaceWithTear,
  UnamusedFace
} from '../assets/emojis'

const EMOJIS = [
  DisguisedFace,
  CowboyHatFace,
  FlushedFace,
  MoneyMouthFace,
  NerdFace,
  SmilingFaceWithHearts,
  SmilingFaceWithSunglasses,
  SmilingFaceWithTear,
  UnamusedFace
]
const EMOJI_LIST = [...EMOJIS, ...EMOJIS]
const SHUFFLED_EMOJI_LIST = getShuffledArray(EMOJI_LIST)

export default SHUFFLED_EMOJI_LIST
