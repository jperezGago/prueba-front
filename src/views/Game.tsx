import { Card, FinishModal } from '../components'
import { useGame, useFinishGame } from '../hooks'
import { getFormattedHourFromTotalSeconds } from '../utils'

interface Props {
  startTime: Date
  restartTime: () => void
  resetPlay: () => void
}

const Game: React.FC<Props> = ({ startTime, restartTime, resetPlay }) => {
  const { cardsInfo, resetCardsInfo, onBackCardPress } = useGame()
  const {
    isGameFinished,
    isRecordTime,
    gameTime,
    restartGame,
    resetGame
  } = useFinishGame({
    cardsInfo,
    startTime,
    resetCardsInfo,
    restartTime,
    resetPlay
  })

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
        isGameFinished && <FinishModal
          time={getFormattedHourFromTotalSeconds(gameTime)}
          isRecordTime={isRecordTime}
          onFinishPressed={restartGame}
          onClosePressed={resetGame}
        />
      }
    </main>
  )
}

export default Game
