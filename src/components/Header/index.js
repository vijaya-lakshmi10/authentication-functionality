// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
    <div className="header">
    <ul className="list-items">
    <li>
    <Link to = "/" className="link-item">
        Home
    </Link>
    </li>
    <li>
    <Link to = "/about" className="link-item">
        About
    </Link>
    </li>
    </ul>
    </div>
)
export default Header
