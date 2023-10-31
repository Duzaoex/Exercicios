import React, { useEffect } from 'react'
import List from './List'

type Album = {
  name: string
  image: string
}

const LinkinPark = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [albuns, setAlbuns] = React.useState<Album[]>([])

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:3000/linkin-park/albuns')
      .then((response) => response.json())
      .then((data) => {
        setAlbuns(data)
      })
      .catch(() => setAlbuns([]))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div>
      {isLoading && <p>Carregando ...</p>}
      {!isLoading && <List items={albuns} />}
    </div>
  )
}

export default LinkinPark