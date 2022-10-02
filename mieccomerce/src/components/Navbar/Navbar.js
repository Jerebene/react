import './Navbar.css'
import React from "react"
import Button from "../Button/Button"
import logo from "./img/logo.png"
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <>
        <nav className='navbar'>
            <div>
            <img className='logo' src={logo} alt='logo'/>
           
            </div>
                <h1 className='titulo'>Jeben <span>Store</span> </h1>
            <div className='buttoncontainer'>
                <Button
                style={{ color: "red"}}
                >
                    Home
                </Button>
                <Button>
                    Tienda
                </Button>
                <Button>
                    Contacto
                </Button>
            </div>
            <div className='Cartwid'>
                <CartWidget />
            </div>
            
        </nav>
        </>
    )
}

export default Navbar