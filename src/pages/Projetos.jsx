import axios from "axios"
import { useEffect } from "react"

export default function Projetos() {
    
    useEffect(()=> {
        async function gitApi () {
            try {
                const getRepo = await axios.get('https://api.github.com/users/juliout/repos')
                const resposta = await getRepo.data
                return console.log(resposta)
            } catch (error) {

            }

        }
        gitApi()
    },[]) 

    return (
        <main className='main'>
          <div className="header">
            <div className="apresentacao">
              <h2>Projetos</h2>
            </div>
            <div className="conteudo">
              
            </div>
          </div>
        </main>
    )
}