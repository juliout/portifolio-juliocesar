import {AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'

export default function About() {

    const dados = {
      nome: "Julio Cesar Siqueira Torres",
      dataNascimento: "24/06/1993",
      foto: '/images/julioprofile.png',
      gostos: ["Games", "Comida", "Gatos", "Computador", "Estudar", "Conversar"],
      Status: "Solteiro",
      Redes:{
        instagram: "https://www.instagram.com/juliout/",
        linkedin: "https://www.linkedin.com/in/julio-cesar-siqueira-torres-55a5a5204/",
      },

      resume: "Um rapaz calmo, com muita vontade de aprender, tendo em vista seu crescimento na area de tecnologia e tambem crescimento pessoal. Em busca de oportunidade para conseguir inicar nessa carreira. Gosto de passar o tempo, estudando e jogando, são meus gostos nesses tempos"
    }

    return (
        <main className='main'>
          <div className="header">
            <div className="apresentacao">
              <h2>Sobre mim!</h2>

            </div>
            <div className="conteudo">
              <div className="mainConteudo">
                
                <img src={dados.foto} alt="imagem perfil" />
                <div className="aboutConteudo">
                  <h3>{dados.nome}</h3>
                  <p>{dados.dataNascimento}</p>
                  <div className='gostos'>{
                    dados.gostos.map((gosto, index)=> {
                      return (
                        <p key={index}>{gosto}</p>
                      )
                    })
                  }</div>
                  <p className='resume'>{dados.resume}</p>
                  <div className="redes">
                    <a href={dados.Redes.instagram} target='_blanc'>
                      <AiOutlineInstagram className='insta'/> 
                    </a>
                    <a href={dados.Redes.linkedin} target='_blanc'>
                      <AiFillLinkedin className='lin'/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    )
}