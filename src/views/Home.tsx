interface Props {
  onPlay: () => void
}

const Home: React.FC<Props> = ({ onPlay }) => {
  return <main>
    <h1>Home</h1>
    <button onClick={onPlay}>Comenzar</button>
  </main>
}

export default Home
