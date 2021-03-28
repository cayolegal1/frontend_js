import React from 'react'
import Logo from '../../img/top-logo.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <a href="www.facebook.com">
                    <img src={Logo} alt="hola" title="Logo" />
                </a>
            </div>
                    <nav className="navbar">
                        <ul>
                            <li id="Home"> <a className="lista" href="#Home">Home</a> </li>
                            <li id="About"> <a className="lista" href="#About"> About</a></li>
                            <li id="Products"> <a className="lista" href="#Products">Products</a></li>
                            <li id="Services"> <a className="lista" href="#Services">Services</a></li>
                            <li id="Control"> <a className="lista" href="#Control"> Control</a></li>
                        </ul>
                    </nav>
        </header>
    )
}

export default Header;