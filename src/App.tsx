import { usePlay } from './hooks'
import { Home, Game } from './views'

const App: React.FC = () => {
  const { play, getGameTime, onPlay, restartTime, resetGame } = usePlay()

  return play
    ? <Game
      getGameTime={getGameTime}
      restartTime={restartTime}
      resetGame={resetGame}
    />
    : <Home onPlay={onPlay}/>
}

export default App
