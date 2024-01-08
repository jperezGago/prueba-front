import { BackCard, FrontCard } from './'
import { type ICard } from '../types'

interface Props {
  cardInfo: ICard
}

const Card: React.FC<Props> = ({ cardInfo }) => cardInfo.visible ? <FrontCard cardInfo={cardInfo}/> : <BackCard cardInfo={cardInfo}/>

export default Card
