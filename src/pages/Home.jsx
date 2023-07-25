import  {BsWhatsapp, BsGithub, BsLinkedin, BsGit} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3, BiLogoJavascript, BiLogoTypescript} from 'react-icons/bi'
import {FaNodeJs} from 'react-icons/fa'
import {GrMysql, GrReactjs} from 'react-icons/gr'
import {TbBrandReactNative} from 'react-icons/tb'

export default function Home() {
    return (
        <main className='main'>
          <div className="header">

            <div className="apresentacao">
              <h2>Olá me Chamo,</h2>
              <h1>Julio Cesar</h1>
              <h3>Desenvolvedor FullStack</h3>
            </div>
          </div>
          <div className="conteudo">
              <p>
                Uma pagina para saber mais sobre tudo que venho fazendo e meus conhecimentos sobre tecnologia e desenvolvimento. Sobre minhas experiencias, estudos e um pouco sobre meus gostos.
              </p>

              <div className="links">
                <p className="title">Contact</p>
                <div className="alllinks">
                    <a href="https://wa.me/5521973088031" target="_blank">
                        <BsWhatsapp className='link wpp' />
                    </a>
                    <a>
                        <BsGithub href='https://github.com/juliout' className='link' target="_blank"/>
                    </a>
                    <a>
                        <BsLinkedin className='link lkd' target="_blank" href='https://www.linkedin.com/in/julio-cesar-siqueira-torres-55a5a5204/'/>
                    </a>
                    <a>
                        <MdEmail href="mailto:juliocst1993@gmail.com" className='link email' target="_blank"/>
                    </a>
                </div>
                <p className='titleTecn'>Tenologias</p>
                <div className="Tenologias">
                    <AiFillHtml5 className='tecnos' fill='#cc6d00'/>
                    <BiLogoCss3 className='tecnos' fill='#0587ff'/>
                    <BiLogoJavascript className='tecnos' fill='#e9ec1b'/>
                    <FaNodeJs className='tecnos' fill='#4bf026'/>
                    <GrReactjs className='tecnos' fill='#0587ff'/>
                    <TbBrandReactNative className='tecnos' fill='#0587ff'/>
                    <BiLogoTypescript className='tecnos' fill='#0587ff'/>
                    <GrMysql className='tecnos' fill='#85c1f8'/>
                    <BsGit className='tecnos' fill='#fc6a09'/>
                </div>

              </div>
            </div>
        </main>
    )
}