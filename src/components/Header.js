import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../Header.css'

const Header = () => {

    const [displayMenu, setDisplayMenu] = useState(false)

    const toggleMobileMenu = () => {
        setDisplayMenu(!displayMenu)
    }

    return (
        <div className="header">
            <h1>Running Around The Island</h1>
            <ul className="nav">
                <NavLink exact to="/" className="link">Map</NavLink>
                <NavLink to="/trails" className="link">Trails</NavLink>
                <a href="https://github.com/ptifur/react-google-maps-practice" target="_blank" rel="noopener noreferrer">source code</a>
            </ul>

            {displayMenu ? 
                <div className="nav-mobile">
                    <NavLink exact to="/" className="link-mobile" onClick={toggleMobileMenu}>MAP</NavLink>
                    <NavLink to="/trails" className="link-mobile" onClick={toggleMobileMenu}>TRAILS</NavLink>
                    <a href="https://github.com/ptifur/react-google-maps-practice" target="_blank" rel="noopener noreferrer" className="link-mobile-source">source code</a>
                </div>
            : null}
            
            <button className="nav-button" onClick={toggleMobileMenu}>{displayMenu ? '✕' : '☰' }</button>
        </div>
    )
}

export default Header