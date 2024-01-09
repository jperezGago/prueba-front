import { PrimaryButton, IconButton } from '.'
import { ClockIcon, CloseIcon } from './icons'

interface Props {
  time: string
  isRecordTime: boolean
  onFinishPressed: () => void
  onClosePressed: () => void
}

const FinishModal: React.FC<Props> = ({ time, isRecordTime, onFinishPressed, onClosePressed }) => {
  return (
    <div className='fixed inset-0 bg-gray-dark-uelz bg-opacity-[0.46] grid place-content-center'>
      <div className='bg-white relative font-semibold text-center w-[484px] py-6 rounded-lg'>
        <p className='text-xl leading-7 text-blue-dark-uelz mb-6'>{isRecordTime ? '¡Enhorabuena, nuevo record!' : '¡Lo has conseguido!'}</p>
        <div className='flex justify-center items-center gap-x-4'>
          <ClockIcon />
          <p className='text-[60px] leading-[60px] text-blue-dark-uelz'>{time}</p>
        </div>
        <div className='border-t pt-6 mt-6 border-gray-softer-uelz' >
          <PrimaryButton text='Jugar otra vez' onClick={onFinishPressed}/>
        </div>
        <div className='absolute top-4 right-4'>
          <IconButton Icon={CloseIcon} onClick={onClosePressed}/>
        </div>
      </div>
    </div>
  )
}

export default FinishModal
