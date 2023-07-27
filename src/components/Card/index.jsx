import { useEffect, useState } from "react"
import {PiDotOutlineFill} from 'react-icons/pi'

export default function Card({repo}) {

    const [valorRepo, setValorRepo] = useState()
    const [info, setInfo] = useState(false)
    const [tp, setTp] = useState()

    function getColor(lan) {
        const arr = {
            javascript: "#DF7401",
            python: "#0101DF",
            native: "#4B088A" ,
            java: "#FF0000",
            node:"#00FF00",
            css: "#00FFFF",
            html:"#6A0888",
            shell: "#FF00FF",
            typescript:"#190707",
            ejs: "#848484",
            pug: "#74DF00",
            php: "#F5A9A9",
            scss: "#8A0808"
        }

        const fin = arr[lan.toLowerCase()]
        return fin
    }

    useEffect(()=> {
        if(repo) {
          function calculatePercentage(dataObj) {
            const totalSum = Object.values(dataObj).reduce((acc, value) => acc + value, 0);
          
            const percentages = {};
            for (const [key, value] of Object.entries(dataObj)) {
              percentages[key] = ((value / totalSum) * 100).toFixed(2);
            }
          
            return { ...percentages};
          }
          const result = calculatePercentage(repo.language);
          setValorRepo(result);
        }
      }, [repo])
    

      if(!info) {
        return (
            <div className="view">
                <div className="view-left">
                <h3>{repo.name}</h3>
                </div>
                <div className="view-right">
                    <p className="title">Linguagues:</p>
                    <div className="languages">
                        <div className="l">
                        {Object.entries(repo.language).map(([chave, valor]) => (
                            <p key={chave}><PiDotOutlineFill fill={getColor(chave)}/>{`${chave}`}</p>
                        ))}
                        </div>
                        <div className="barra-progressão">
                        {
                            valorRepo && Object.entries(valorRepo).map(([chave, valor]) => (
                            
                            <div 
                                key={chave} 
                                style={{
                                    width:`${valor}%`,
                                    backgroundColor: getColor(chave)
                                }}
                            >
                            </div>
                        
                            ))
                        }
                        
                        </div>
                    </div>
                    <div className="descricao">
                        <p>
                            {repo.description}
                        </p>
                    </div>
                    <a href={repo.html_url} target="_blanc" className="linkRepo">
                        gitHub
                    </a>
                </div>
            </div>
        )
      }
    
}

