import { BackCard, FrontCard } from './'
import { type ICardInfo } from '../types'

interface Props {
  cardInfo: ICardInfo
  onBackCardPress: (id: number) => void
}

const Card: React.FC<Props> = ({ cardInfo, onBackCardPress }) => {
  const { id, emoji, isVisible } = cardInfo

  return isVisible
    ? <FrontCard emoji={emoji}/>
    : <BackCard id={id} onBackCardPress={onBackCardPress}/>
}

export default Card
