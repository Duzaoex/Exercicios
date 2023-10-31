import './App.css'
import reactLogo from './assets/react.svg'
import trybeLogo from './assets/trybe.png'
import viteLogo from '/vite.svg'

function App() {
  return (
    <>
      <h1>Turma 33 - v2</h1>
      <p className="read-the-docs">O retorno Front</p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://betrybe.com" target="_blank">
          <img src={trybeLogo} className="logo trybe" alt="Trybe logo" />
        </a>
      </div>
    </>
  )
}

export default App
