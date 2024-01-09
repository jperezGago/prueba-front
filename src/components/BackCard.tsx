interface Props {
  id: number
  onBackCardPress: (id: number) => void
}

const BackCard: React.FC<Props> = ({ id, onBackCardPress }) => (
  <div
    className='card-container card text-[40px] sm:text-[48px] lm:text-[60px] font-semibold bg-gradient-to-r from-blue-soft-uelz via-green-clear-uelz to-green-clearer-uelz from-[16.19%] via-[72.63%] to-[127.87%] [backface-visibility:hidden]'
    onClick={() => { onBackCardPress(id) }}
  >
    {id}
  </div>
)

export default BackCard
