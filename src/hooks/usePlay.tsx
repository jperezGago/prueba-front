import { useState } from 'react'

const usePlay = (): [boolean, () => void] => {
  const [play, setPlay] = useState(false)

  return [
    play,
    () => { setPlay(true) }
  ]
}

export default usePlay
