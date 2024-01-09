import { Card, FinishModal } from '../components'
import { useGame, useFinishGame } from '../hooks'

interface Props {
  getGameTime: () => string
  restartTime: () => void
  resetGame: () => void
}

const Game: React.FC<Props> = ({ getGameTime, restartTime, resetGame }) => {
  const { cardsInfo, resetCardsInfo, onBackCardPress } = useGame()
  const {
    isModalVisible,
    onFinishPressed,
    onClosePressed
  } = useFinishGame({ cardsInfo, resetCardsInfo, restartTime, resetGame })

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
      {
        isModalVisible && <FinishModal
          time={getGameTime()}
          onFinishPressed={onFinishPressed}
          onClosePressed={onClosePressed}
        />
      }
    </main>
  )
}

export default Game
