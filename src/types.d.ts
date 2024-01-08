export interface ICardInfo {
  id: number
  emoji: string
  isVisible: boolean
  matched: boolean
}
export type OnBackCardPressType = (number) => void
