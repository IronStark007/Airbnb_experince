import NavBar from '../NavBar/NavBar';
import './Header.css';
import '../utils.css'
import title from '../../static/title.jpg';
import logo from '../../static/logo.jpg';
import settings from '../../static/settings.svg';
import back from '../../static/back.svg';

function Header({ menuRef }) {
    return (
        <div className="flex-between header">
            <div className="pointer header-image">
                <img className='pointer back' src={back} alt="back" />
                <img className='title' src={title} alt="title" />
                <img className='pointer logo' src={logo} alt="logo" />
            </div>
            <div className="header-nav">
                <h4 className='shadow pointer'>Become a host</h4>
                <img className='shadow pointer' src={settings} alt="settings" />
                <NavBar menuRef={menuRef} />
            </div>
        </div>
    );
}

export default Header;