import { type OnBackCardPressType } from '../types'

interface Props {
  id: number
  onBackCardPress: OnBackCardPressType
}

const BackCard: React.FC<Props> = ({ id, onBackCardPress }) => (
  <div
    className='card text-[60px] font-semibold bg-gradient-to-r from-blue-soft-uelz via-green-clear-uelz to-green-clearer-uelz from-[16.19%] via-[72.63%] to-[127.87%]'
    onClick={() => { onBackCardPress(id) }}
  >
    {id}
  </div>
)

export default BackCard
