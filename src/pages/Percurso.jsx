export default function Percurso() {

  const Empregos = [
    {
      nome: "Personal Service Recursos Humanos e Assessoria Empresarial LTDA.",
      data: "01/03/2018 - 13/08/2020",
      exp: "Auxiliar de Serviços Gráficos Jr."
    },
    {
      nome: "Luso Brasileira Serviços LTDA",
      data: "01/03/2018 – 13/08/2020",
      exp: "Auxiliar de Serviços Gráficos Pleno"
    },
    {
      nome: "FH Souza Advocacia e Consultoria Tributária",
      data: "13/06/2022 - 31/07/2022",
      exp: "Desenvolvedor Full-Stack Junior"
    },
    {
      nome: "Leadmidia - freelancer",
      data: "02/06/2022 - atualmente",
      exp: "Desenvolvedor Junior - freelancer. Desenvolvimento FullStack, utilizando NodeJs, ReactJs, MySQL, typescrypt, javascript, css, html, desenvolvendo aplicações, Bots de chat para wpp, entre outras ferramentas..."
    },
    
  ]

  const Estudos = [
    {
      nome: "Ensino médio Completo",
      data: "2009 - 2011",
      exp: '-'
    },
    {
      nome: "Faculdade Unicesumar" ,
      data: "03/2022 – 07/2024",
      exp: "análise e desenvolvimento de sistemas"
    },
    {
      nome:"Digital House Full-Stack",
      data:"02/2021 - 09/2021",
      exp:"aulas online, com aprendizado focado em HTML, CSS, JavaScript. NodeJs, MySQL, ReactJs, Git, GitHub projeto feito em grupo, deploy, builds de projetos em locais externos."
    },
    {
      nome: "Curso Udemy ReactJs",
      data: "-",
      exp: "videos aulas com foco em JavaScript Es6, ReactJs, Context, Firebase, Hooks, mongodb, com projetos desenvolvidos com as tecnologias ensinadas"
    },
  ]



    return (
        <main className='main'>
          <div className="header">
            <div className="apresentacao">
              <h2>Percurso</h2>
            </div>
            <div className="conteudo">
              <div className="percurso">
                <div className="profissional">
                  <ul>
                    {
                      Empregos.map(emprego => {
                        return (
                          <li>
                            <h3>{emprego.nome}</h3>
                            <q>{emprego.data}</q>
                            <p>{emprego.exp}</p>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="estudo">
                  <ul>
                    {
                      Estudos.map(estudo => {
                        return (
                          <li>
                            <h3>
                              {estudo.nome}
                              <q>{estudo.data}</q>
                            </h3>
                            <p>{estudo.exp}</p>
                          </li>
                        )
                      })
                    }
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </main>
    )
}

