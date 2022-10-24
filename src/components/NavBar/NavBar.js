import './NavBar.css';
import '../utils.css'
import profile from '../../static/profile.svg';
import hamburger from '../../static/hamburger.svg';
import Menu from '../Menu/Menu';

function NavBar({ menuRef }) {
  const showMenu = (e) => {
    e.stopPropagation();
    if (menuRef.current.style.display === "block") {
      menuRef.current.style.display = "none";
    } else {
      menuRef.current.style.display = "block";
    }
  }
  return (
    <div className="flex-between pointer navbar" onClick={showMenu}>
      <img className='menubar' src={hamburger} alt="menubar" />
      <img className='profile' src={profile} alt="profile" />
      <Menu menuRef={menuRef} />
    </div>
  );
}

export default NavBar;
