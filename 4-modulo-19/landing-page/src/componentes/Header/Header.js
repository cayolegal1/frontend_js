import React, {useState, useEffect} from 'react'
import Logo from '../../img/top-logo.svg'


const Header = () => {
    
    const [nav, setNav] = useState (false)

    const changeBackground = () => {
       if(window.scrollY >= 630) {
           setNav(true)
       } else {
           setNav(false)
       }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <header className={nav ? 'header1' : 'header'}> 

            <figure className="container">
                <a href="www.facebook.com">
                    <img src={Logo} alt="hola" title="Logo" className="Logo" />
                </a>
            </figure>
                    <nav className= 'navbar'>
                        <ul className= 'unorderderlist'>
                            <li id="Home"> <a className="lista" href="#Home-button">Inicio</a> </li>
                            <li id="About"> <a className="lista" href="#About-button"> Sobre nosotros</a></li>
                            <li id="Products"> <a className="lista" href="#Products-button">Productos</a></li>
                            <li id="Services"> <a className="lista" href="#Services-button">Servicios</a></li>
                            <li id="Control"> <a className="lista" href="#Contact-button"> Contacto</a></li>
                        </ul>
                    </nav>
                    
        </header>
    )
}

export default Header;