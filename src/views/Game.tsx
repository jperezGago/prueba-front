import { Card } from '../components'
import { useGame } from '../hooks'

const Game: React.FC = () => {
  const { cardsInfo, onBackCardPress } = useGame()

  return (
    <main className='min-h-screen bg-green-soft-uelz grid place-content-center'>
      <section className='grid grid-cols-6 gap-[36px]'>
        {cardsInfo.map(cardInfo => (
          <Card
            key={cardInfo.id}
            cardInfo={cardInfo}
            onBackCardPress={onBackCardPress}
          />
        ))}
      </section>
    </main>
  )
}

export default Game
