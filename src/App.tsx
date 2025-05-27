import './App.css'
import { About } from './components/About'
import { Header } from './components/Header'
import { MainVisual } from './components/MainVisual'
import { Portfolio } from './components/Portfolio'

function App() {

  return (
    <>
      <Header/>
      <MainVisual/>
      <About/>
      <Portfolio/>
    </>
  )
}

export default App
