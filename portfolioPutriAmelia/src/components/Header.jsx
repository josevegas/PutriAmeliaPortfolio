import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className="main-header">
            <div className="logo">
                <Link to="/">Putri Amelia</Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/videogrid">Video Grid</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header