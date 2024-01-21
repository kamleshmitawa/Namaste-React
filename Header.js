import { Link } from 'react-router-dom';
import OnlineStatus from './components/OnlineStatus';


const Header = () => {
    return <nav>
        <OnlineStatus />
        <ul>
            <li><Link to="/home"> Home </Link></li>
            <li><Link to="/about"> About </Link></li>
            <li><Link to="/contact"> contact </Link></li>
        </ul>
    </nav>
}


export default Header;