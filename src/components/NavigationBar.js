import {Link} from 'react-router-dom';
import './NavigationBar.css';

export default function NavigationBar() {
    return (
        <div className="NavbarContainer">
            <Link to="/" className='NavbarLink'>
                Home
            </Link>
            <Link to="/about" className='NavbarLink'>
                About
            </Link>
        </div>
    );
}