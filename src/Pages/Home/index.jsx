import './home.css'
import curriculo from '../../assets/Curriculo Thomaz Hilário.pdf'
import whatssapIcon from '../../icons/whatssap.png'

export default function Home(){
    return(
        <main id='container_home'>
            {/* Container foto */}
            <section id="container_apresentacao">
                <img src="https://images.pexels.com/photos/8919698/pexels-photo-8919698.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Imagem de perfil" className='fotoPerfil'/>

                <article id='container_description'>
                    {/* Container de introducao */}
                    <div id='apresentacao'>
                        <h1>Thomaz</h1>
                        <h1>Alves</h1>

                        <p>Front-End Developer</p>

                    </div>
                </article>

                <div id='links_pessoais'>
                    <a href={curriculo} target='_blank' rel="noreferrer" id='curriculo' className='links_informacao'>Download CV</a>
                    <a href={curriculo} target="_blank" rel="noreferrer" className='links_informacao'>Entrar em Contato</a>
                </div>
            </section>

            {/* Sobre mim */}
            <SobreMim/>

        </main>
    )
}


function SobreMim(){
    return(
        <section id='container_sobremim'>
            <div className='container_titulo'>
                {/* Titulo */}
                <h1 className='titulo_sobremim'>🙂 Sobre mim</h1>
            </div>

            <div id='container_texto'>
                {/* Texto de apresentacao */}
                <p className='texto-apresentacao'>👋 Hello World! Thomaz. Prazer!</p>
                <p className='texto-apresentacao'>🎓 Universitário de Desenvolvimento Full-Stack pelo Sistema Estacio.</p>
                <p className='texto-apresentacao'>💡 Interesse em Desenvolvimento Front-End com Javascript, TypeScript, React, Tailwind...</p>
                <p className='texto-apresentacao'>🚀 Sempre aprendendo...</p>
            </div>
        </section> 
    )
}