import React from 'react'
import { Navbar, NavbarText } from 'reactstrap'
import logo from '../assets/img/logo.png'
const Header = () => {
    return (
        <Navbar
            style={{borderRadius:'4px'}}
            className="my-2"
            color="secondary"
            dark
        >
            <NavbarText>Digital Wallet Dashboard</NavbarText>
            <img
                alt="logo"
                src={logo}
                style={{
                    height: 40,
                    width: 40
                }}
            />
            
        </Navbar>
    )
}

export default Header