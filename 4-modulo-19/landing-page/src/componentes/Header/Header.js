import React from 'react'
import Logo from '../../img/top-logo.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <a href="www.facebook.com">
                    <img src={Logo} alt="hola" title="Logo" className="Logo" />
                </a>
            </div>
                    <nav className="navbar">
                        <ul>
                            <li id="Home"> <a className="lista" href="#Home">Inicio</a> </li>
                            <li id="About"> <a className="lista" href="#About"> Sobre nosotros</a></li>
                            <li id="Products"> <a className="lista" href="#Products">Productos</a></li>
                            <li id="Services"> <a className="lista" href="#Services">Servicios</a></li>
                            <li id="Control"> <a className="lista" href="#Control"> Contacto</a></li>
                        </ul>
                    </nav>
        </header>
    )
}

export default Header;