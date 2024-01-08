interface Props {
  Icon: React.FC
  onClick: () => void
}

const IconButton: React.FC<Props> = ({ Icon, onClick }) => {
  return (
    <button onClick={onClick}>
      <Icon/>
    </button>
  )
}

export default IconButton
