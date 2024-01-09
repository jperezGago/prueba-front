import { Card } from '.'
import { type ICardInfo } from '../types'

interface Props {
  cardsInfo: ICardInfo[]
  onBackCardPress: (id: number) => void
}

const Board: React.FC<Props> = ({ cardsInfo, onBackCardPress }) => {
  return (
    <section className='grid grid-cols-6 gap-[36px]'>
      {cardsInfo.map(cardInfo => (
        <Card
          key={cardInfo.id}
          cardInfo={cardInfo}
          onBackCardPress={onBackCardPress}
        />
      ))}
    </section>
  )
}

export default Board
