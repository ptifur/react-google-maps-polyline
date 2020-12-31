import { Link, NavLink } from 'react-router-dom'
import '../Header.css'

const Header = () => (
    <div className="header">
        <h1>Running Around The Island</h1>
        <ul className="nav">
            <NavLink exact to="/" className="link">Map</NavLink>
            <NavLink to="/trails" className="link">Trails</NavLink>
            <a href="https://github.com/ptifur/react-google-maps-polyline" target="_blank" rel="noopener noreferrer">source code</a>
        </ul>
        <div className="nav-mobile">
            <a href="http://" target="_blank" rel="noopener noreferrer" className="link">☰</a>
        </div>
    </div>
)

export default Header