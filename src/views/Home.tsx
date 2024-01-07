import { Logo } from '../components/icons'

interface Props {
  onPlay: () => void
}

const Home: React.FC<Props> = ({ onPlay }) => {
  return (
    <main className='bg-blue-uelz min-h-screen grid place-content-center text-white text-center'>
      <section>
        <Logo/>
        <h1 className='mb-[60px]'>Test de memoria</h1>
        <button
          className='bg-green-clear-uelz hover:bg-green-dark-uelz active:bg-green-dark-uelz active:ring active:ring-green-clear-uelz rounded-md py-3 px-7 text-xl font-semibold leading-7'
          onClick={onPlay}
        >
          Comenzar
        </button>
      </section>
    </main>
  )
}

export default Home
