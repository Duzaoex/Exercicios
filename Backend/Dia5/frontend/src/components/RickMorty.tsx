import React, { useEffect } from 'react'
import List from './List'

type Character = {
  name: string
  image: string
}

const RickMorty = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [characters, setCharacters] = React.useState<Character[]>([])

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:3000/rick-morty/characters')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data)
      })
      .catch(() => setCharacters([]))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && <List items={characters} />}
    </div>
  )
}

export default RickMorty