import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/rick-morty/characters', (req, res) => {
  res.json([
    {
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    // fill array with other characters
    {
      name: 'Morty Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    },
    {
      name: 'Beth Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    },
    {
      name: 'Jerry Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
    },
    {
      name: 'Summer Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
    },
  ])
})

app.get('/linkin-park/albuns', (req, res) => {
 res.json([
    {
      name: 'Hybrid Theory',
      image: 'https://m.media-amazon.com/images/I/61+xCTCM-ZL._UF1000,1000_QL80_.jpg'
    },
    {
      name: 'Meteora',
      image: 'https://upload.wikimedia.org/wikipedia/pt/8/83/Linkin_park-meteora_a.jpg'
    },
    {
      name: 'Minutes to Midnight',
      image: 'https://upload.wikimedia.org/wikipedia/pt/d/d3/Linkin_Park_Minutes_to_Midnight.jpg'
    },
    {
      name: 'A Thousand Suns',
      image: 'https://upload.wikimedia.org/wikipedia/pt/1/1e/Linkin_Park_A_Thousand_Suns.jpg'
    },
    { 
      name: 'Living Things',
      image: 'https://upload.wikimedia.org/wikipedia/pt/c/c9/Linkin_Park_-_Living_Things.jpg'
    },
    {
      name: 'The Hunting Party',
      image: 'https://upload.wikimedia.org/wikipedia/pt/c/c5/Linkin_Park_Hunting_Party.jpg'
    },
    {
      name: 'One More Light',
      image: 'https://upload.wikimedia.org/wikipedia/pt/1/19/Linkin_Park_-_One_More_Light_%28capa%29.jpg'
    },
  ])
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})