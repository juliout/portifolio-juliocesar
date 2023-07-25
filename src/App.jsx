
import './app.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import About from './pages/About'
import Percurso from './pages/Percurso'
import Menu from './components/menu/menu'

function App() {
  const [view, setView] = useState('Home')
 

  return (
     <div className="Base">
        {view === 'Home' ? <Home/> : ''}
        {view === 'Projetos' ? <Projetos/> : ''}
        {view === 'Percurso' ? <Percurso/> : ''}
        {view === 'About' ? <About/> : ''}

      <Menu setView={setView}/>
     </div>

  )
}

export default App
