import { PrimaryButton } from '../components'
import { Logo } from '../components/icons'

interface Props {
  onPlay: () => void
}

const Home: React.FC<Props> = ({ onPlay }) => {
  return (
    <main className='bg-blue-dark-uelz min-h-screen grid place-content-center text-center'>
      <section>
        <Logo/>
        <h1 className='mb-[60px]'>Test de memoria</h1>
        <PrimaryButton text='Comenzar' onClick={onPlay}/>
      </section>
    </main>
  )
}

export default Home
