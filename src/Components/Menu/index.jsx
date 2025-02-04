// Importando biblioteca de animacao
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// Components
import { MenuMobile } from "./menu-mobile";

// Css
import './menu.css'

export const Menu = () => {

    // Return Gsap Props
    function returnGsapProps(duration, sectionName, offsetY){
        return {
                duration, 
                scrollTo: {
                    y:sectionName, 
                    offsetY
                }
            }
    }

    // Scroll section
    function scrollSection(text){
        // Registrando plugin
        gsap.registerPlugin(ScrollToPlugin)
        
        // Caso o texto do button seja Sobre
        if(text === 'Sobre'){
            gsap.to(window,{duration:1,scrollTo:0})
        }
        
        // Casoo o texto do button seja habilidades
        if(text === 'Habilidades'){
            gsap.to(window,returnGsapProps(1, '#container_habilidade', 100))
        }

        // Caso o texto do button seja Projetos
        if(text === 'Projetos'){
            gsap.to(window, returnGsapProps(1, '#container_projetos', 100))
        }

        // Caso o texto do button seja Carreira
        if(text === 'Carreira'){
            gsap.to(window, returnGsapProps(1,'#container__carreira', 100))
        }

        // Caso o texto do button seja Contatos
        if(text === 'Contatos'){
            gsap.to(window, returnGsapProps(1, '#container_Contatos', 100))
        }
    
        

    }

    return(
        <nav id='container_menu_desktop'>

            {/* Menu Mobile */}
            <MenuMobile scrollSection={scrollSection}/>

            <menu id='menu_desktop'>
                <button onClick={(e) => scrollSection(e.target.textContent)}>Sobre</button>
                <button onClick={(e) => scrollSection(e.target.textContent)}>Habilidades</button>
                <button onClick={(e) => scrollSection(e.target.textContent)}>Projetos</button>
                <button onClick={(e) => scrollSection(e.target.textContent)}>Carreira</button>
                <button onClick={(e) => scrollSection(e.target.textContent)}>Contatos</button>
            </menu>
        </nav>
    )
    
}