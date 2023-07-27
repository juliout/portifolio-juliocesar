import axios from "axios"
import { useEffect, useState } from "react"
import load from '../assets/images/load.gif'
import coding from '../assets/images/coding.gif'
import {PiDotOutlineFill} from 'react-icons/pi'
import {FiGithub} from 'react-icons/fi'
import Card from "../components/Card"

export default function Projetos() {

  const [repo, setRepo] = useState()

  useEffect(()=> {
      async function gitApi () {
          try {
              const getRepo = await axios.get('https://api.github.com/users/juliout/repos')
              const resposta = await getRepo.data
              const arrayRepo = []
              if(resposta) {
                resposta.map(async (rep) => {
                  const {
                    html_url,
                    description,
                    languages_url,
                    name,
                  } = rep

                  if(languages_url) {
                    const response = await axios.get(languages_url)
                    var language = response.data
                  }

                  return arrayRepo.push({
                    html_url,
                    description,
                    language,
                    name
                  })
                })
                setTimeout(()=> {
                  setRepo(arrayRepo)
                }, 2000)
              }
             
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
        </div>
        <div className="conteudo">
            <div className="repos">
              {
                !repo ? <img src={load} alt="load image" className="loadImage"/> :
                repo.map(repositorio =>{
                  return (
                    <Card repo={repositorio}/>
                  )
                })
              }
            </div>
            
          </div>
      </main>
  )
}