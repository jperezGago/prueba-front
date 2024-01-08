interface Props {
  emoji: string
}

const FrontCard: React.FC<Props> = ({ emoji }) => (
  <div className='card bg-yellow-soft-uelz'>
    <img src={emoji} alt='emoji' className='size-[68px]'/>
  </div>
)

export default FrontCard
