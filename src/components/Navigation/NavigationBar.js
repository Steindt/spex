import {Link} from 'react-router-dom';
import './NavigationBar.css';
import SearchBar from './SearchBar.js';
import Profile from './Profile.js';
import Language from './Language.js';

export default function NavigationBar() {
    return (
        <div className="NavbarContainer">
            <Link to="/" className='NavbarLink'>
                Home
            </Link>
            <Link to="/about" className='NavbarLink'>
                About
            </Link>
            <SearchBar className='Important'/>
            <Language className='Important'/>
            <Profile className='Important'/>
        </div>
    );
}