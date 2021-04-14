import React, {useState} from 'react'
import Logo from '../../img/top-logo.svg'
import {Link} from 'react-scroll' 


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
                <Link to="Home-button" smooth={true} duration={1000}>
                    <img src={Logo} alt="hola" title="Logo" className="Logo" />
                </Link>
            </figure>
                    <nav className= 'navbar'>
                        <ul className= 'unorderderlist'>
                            <li id="Home"> <Link className="lista" to="Home-button" smooth={true} duration={1000}>Inicio</Link> </li>
                            <li id="About"> <Link className="lista" to="About-button" smooth={true} duration={1000}> Sobre nosotros</Link></li>
                            <li id="Products"> <Link className="lista" to="Products-button" smooth={true} duration={1000}>Productos</Link></li>
                            <li id="Services"> <Link className="lista" to="Services-button" smooth={true} duration={1000}>Servicios</Link></li>
                            <li id="Control"> <Link className="lista" to="Contact-button" smooth={true} duration={1000}> Contacto</Link></li>
                        </ul>
                    </nav>
                    
        </header>
    )
}

export default Header;