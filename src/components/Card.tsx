import { BackCard, FrontCard } from './'
import { type ICardInfo } from '../types'

interface Props {
  cardInfo: ICardInfo
  onBackCardPress: (id: number) => void
}

const Card: React.FC<Props> = ({ cardInfo, onBackCardPress }) => {
  const { id, emoji, isVisible } = cardInfo
  const classNameBase = 'relative size-[124px] [transform-style:preserve-3d] duration-700'

  return (
    <div className='[perspective:400px]'>
      <div className={isVisible ? classNameBase + ' [transform:rotateY(180deg)]' : classNameBase}>
        <FrontCard emoji={emoji}/>
        <BackCard id={id} onBackCardPress={onBackCardPress}/>
      </div>
    </div>
  )
}

export default Card
