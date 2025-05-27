import './App.css'
import { About } from './components/About'
import { Header } from './components/Header'
import { MainVisual } from './components/MainVisual'
import { Portfolio } from './components/Portfolio'
import { Social } from './components/Social'

function App() {

  return (
    <>
      <Header/>
      <MainVisual/>
      <About/>
      <Portfolio/>
      <Social/>
    </>
  )
}

export default App
