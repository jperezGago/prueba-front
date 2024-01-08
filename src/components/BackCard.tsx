import { type ICard } from '../types'

interface Props {
  cardInfo: ICard
}

const BackCard: React.FC<Props> = ({ cardInfo }) => {
  const { id } = cardInfo

  return (
    <div className='card text-[60px] font-semibold bg-gradient-to-r from-blue-soft-uelz via-green-clear-uelz to-green-clearer-uelz from-[16.19%] via-[72.63%] to-[127.87%]'>
      {id}
    </div>
  )
}

export default BackCard
