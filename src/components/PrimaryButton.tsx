interface Props {
  text: string
  onClick: () => void
}

const PrimaryButton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button
      className='bg-green-clear-uelz hover:bg-green-dark-uelz active:bg-green-dark-uelz active:ring active:ring-green-clear-uelz rounded-md py-3 px-7 text-xl font-semibold leading-7'
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default PrimaryButton
