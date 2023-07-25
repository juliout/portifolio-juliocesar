

export default function Menu ({setView}) {
    return (
        <div className='menu'>
          <ul>
              <li onClick={()=> setView('Home')}>Inicio</li>
              <li onClick={()=> setView('Projetos')}>Projetos</li>
              <li onClick={()=> setView('Percurso')}>Percurso</li>
              <li onClick={()=> setView('About')}>Sobre mim</li>
          </ul>
        </div>
    )
}