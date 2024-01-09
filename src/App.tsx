import { usePlay } from './hooks'
import { Home, Game } from './views'

const App: React.FC = () => {
  const { play, startTime, startGame, restartTime, resetPlay } = usePlay()

  return play
    ? <Game
      startTime={startTime}
      restartTime={restartTime}
      resetPlay={resetPlay}
    />
    : <Home onPlay={startGame}/>
}

export default App
