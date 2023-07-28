import { useState } from "react"


export default function Menu ({setView}) {

    const [target, setTarget] = useState('Home')
    return (
        <div className='menu'>
          <ul>
                <li 
                onClick={()=> {
                    setTarget('Home')
                    setView('Home')
                }}
                style={{
                    backgroundColor: `${target && target === 'Home' ? 'rgba(235, 235, 235, 0.432)' : ''}`,
                    borderRight: `${target && target === 'Home' ? "2px solid black" : ''}`
                }}
                >Inicio</li>
                <li 
                    onClick={()=> {
                        setTarget('Projetos')
                        setView('Projetos')
                    }}
                    style={{
                        backgroundColor: `${target && target === 'Projetos' ? 'rgba(235, 235, 235, 0.507)' : ''}`,
                        borderRight: `${target && target === 'Projetos' ? "2px solid black" : ''}`
                    }}
                >Projetos</li>
                    <li 
                        onClick={()=> {
                            setTarget('Percurso')
                            setView('Percurso')
                        }}
                        style={{
                            backgroundColor: `${target && target === 'Percurso' ? 'rgba(235, 235, 235, 0.432)' : ''}`,
                            borderRight: `${target && target === 'Percurso' ? "2px solid black" : ''}`
                        }}
                    >Percurso</li>
                <li 
                    onClick={()=> {
                        setTarget('About')
                        setView('About')
                    }}
                    style={{
                        backgroundColor: `${target && target === 'About' ? 'rgba(235, 235, 235, 0.432)' : ''}`,
                        borderRight: `${target && target === 'About' ? "2px solid black" : ''}`
                    }}
                    >Sobre mim</li>
          </ul>
        </div>
    )
}