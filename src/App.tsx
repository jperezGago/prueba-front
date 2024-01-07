import { usePlay } from './hooks'
import { Home, Game } from './views'

const App: React.FC = () => {
  const [play, onPlay] = usePlay()

  return play ? <Game/> : <Home onPlay={onPlay}/>
}

export default App
