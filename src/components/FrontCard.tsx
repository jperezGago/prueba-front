import { type ICard } from '../types'

interface Props {
  cardInfo: ICard
}

const FrontCard: React.FC<Props> = ({ cardInfo }) => {
  const { emoji } = cardInfo

  return (
    <div className='card bg-yellow-soft-uelz'>
      <img src={emoji} alt='emoji' className='size-[68px]'/>
    </div>
  )
}

export default FrontCard
