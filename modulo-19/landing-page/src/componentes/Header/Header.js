import React from "react"
import Logo from "../../img/footer-logo.svg"

const Header = () => {
    return (
        <header className="navegacion">
            <div className="container_1">
                <a href="https://www.linkedin.com/mynetwork/" target="blank" >
                    <img src={Logo} alt="logo"  />
                </a>
                </div>
                <div className="navbar_1">
                <nav className="nav">
                    <ul>
                        <li className="Home"> <a className="lista" href="#Home">Home</a> </li>
                        <li className="About"> <a className="lista" href="#About"> About</a></li>
                        <li className="Products"> <a className="lista" href="#Products">Products</a></li>
                        <li className="Services"> <a className="lista" href="#Services">Services</a></li>
                        <li className="Control"> <a className="lista" href="#Control"> Control</a></li>
                    </ul>   
                </nav>
                </div>
                
            
        </header>
        
    )
}

export default Header;