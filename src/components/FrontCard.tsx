interface Props {
  emoji: string
}

const FrontCard: React.FC<Props> = ({ emoji }) => (
  <div className='card-container card bg-yellow-soft-uelz [transform:rotateY(180deg)]'>
    <img src={emoji} alt='emoji' className='size-12 sm:size-18 lg:size-[68px]'/>
  </div>
)

export default FrontCard
